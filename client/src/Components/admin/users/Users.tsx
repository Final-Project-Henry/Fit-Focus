import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { delete_user, get_users, reset_delete_user } from "../../../features/admin/admin";
import active from "../imgs/active.png";
import desactive from "../imgs/desactive.png";
import premium from "../imgs/premium.png";
import free from "../imgs/normal.png";
import dele from "../imgs/delete.png";
import {
  Grid,
  GridColumn,
  GridToolbar,
  GridPageChangeEvent,
  GridSortChangeEvent
} from '@progress/kendo-react-grid';
import { GridPDFExport } from "@progress/kendo-react-pdf";
import '@progress/kendo-theme-material/dist/all.css';
import { orderBy, SortDescriptor } from "@progress/kendo-data-query";
import Swal from "sweetalert2";

interface Page {
  skip: number;
  take: number;
}

const initialSort: Array<SortDescriptor> = [
  { field: "name", dir: "asc" },
];

export default function Users() {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.admin);
  const navigate = useNavigate();

  let total: number | undefined = users.users?.length;
  let pageSize: number = 10;

  const [page, setPage] = React.useState<Page>({ skip: 0, take: pageSize });
  const [sort, setSort] = React.useState(initialSort);

  const onEdit = (id: string) => {
    navigate(`/admin/users/${id}`);
  };

  const onDelete = (id: string) => {
    Swal.fire({
      title: '¿Estas seguro que quieres eliminar al Usuario de la DB?',
      text: "Este proceso es irreversible!!!!!!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: "Cancelar",
      confirmButtonText: 'Eliminar',
    }).then((result: any) => {
      if (result.isConfirmed) {
        dispatch(delete_user(id))
      }
    })
  };

  const actionCell = (user: any) => {
    return (
      <td style={{ display: "flex", justifyContent: "space-around" }}>
        <button
          style={{
            backgroundColor: "#111827",
            color: "white",
            width: "5vw",
          }}
          onClick={() => onEdit(user.dataItem._id)}
        >
          Edit
        </button>
        <p
          style={{
            backgroundImage: `url(${dele})`,
            backgroundSize: "contain",
            width: "5vw",
            height: "3vh",
            backgroundRepeat: "no-repeat",
            cursor: "pointer",
          }}
          onClick={() => {
            onDelete(user.dataItem._id);
          }}
        >
          {" "}
        </p>
      </td>
    )
  }

  const statusCell = (props: any) => {
    return (
      <td
        style={{ display: "flex", alignItems: "center", gap: "5px" }}
      >
        <img
          style={{ width: "10px", height: "10px" }}
          src={props.dataItem.status === "activated" ? active : desactive}
        />
        {props.dataItem.status}
      </td>
    )
  }

  const planCell = (props: any) => {
    return (
      <td>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <img
            style={{ width: "20px", height: "20px" }}
            src={props.dataItem.plan === "normal" ? free : premium}
          />
          {props.dataItem.plan}
        </div>
      </td>
    )
  }

  const pageChange = (event: GridPageChangeEvent) => {
    setPage(event.page);
  };

  let gridPDFExport: GridPDFExport | null;
  const exportPDF = () => {
    setTimeout(() => {
      if (gridPDFExport) {
        gridPDFExport.save(users.users as any);
      }
    }, 250);
  };

  const grid = (
    <Grid
      data={orderBy(users.users as any, sort)?.slice(page.skip, page.skip + page.take)}
      pageable={true}
      {...page}
      onPageChange={pageChange}
      total={total}
      sortable={true}
      sort={sort}
      onSortChange={(e: GridSortChangeEvent) => {
        setSort(e.sort);
      }}
    >
      <GridToolbar>
        <button
          title="Export PDF"
          className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
          onClick={exportPDF}
        >
          Export table PDF
        </button>
      </GridToolbar>
      <GridColumn field="_id" title="ID" />
      <GridColumn field="name" title="User" />
      <GridColumn field="email" title="Email" />
      <GridColumn field="status" title="Status" cell={statusCell} />
      <GridColumn field="plan" title="Plan" cell={planCell} />
      <GridColumn field="actions" title="Action" cell={actionCell} width="150px" />
    </Grid>
  )

  useEffect(() => {
    if(users.delete_user==='deleted'){
      Swal.fire(
        'Eliminado',
        'El Usuario fue eliminado de la DB exitosamente',
        'success'
    )
    }
    dispatch(get_users());
    return ()=>{
      dispatch(reset_delete_user())
    }
  }, []);


  return (
    <div style={{ marginLeft: "3vw" }}>
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "500",
          margin: "25px 0 10px 0",
        }}
      >
        Users
      </h1>
      {grid}
      <GridPDFExport ref={(pdfExport) => (gridPDFExport = pdfExport)}>
        {grid}
      </GridPDFExport>
    </div>
  );
}
