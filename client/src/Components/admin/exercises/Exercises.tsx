import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import dele from "../imgs/delete.png";
import premium from "../imgs/premium.png";
import free from "../imgs/normal.png";
import { Exercises_Get } from "../../../features/counter/counterSlice";
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
import { delete_exer, reset_delete_exer } from "../../../features/admin/admin";

interface Page {
  skip: number;
  take: number;
}

const initialSort: Array<SortDescriptor> = [
  { field: "name", dir: "asc" },
];

export default function Exercises() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const admin = useAppSelector(state => state.admin);
  const navigate = useNavigate();

  let total: number | undefined = user.exercises?.length;
  let pageSize: number = 10;

  const [page, setPage] = React.useState<Page>({ skip: 0, take: pageSize });
  const [sort, setSort] = React.useState(initialSort);

  const onEdit = (id: string) => {
    navigate(`/admin/exercises/${id}`);
  };

  const onDelete = (id: string) => {
    Swal.fire({
      title: '¿Estas seguro que quieres eliminar el ejercicio?',
      text: "Este proceso es irreversible!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: "Cancelar",
      confirmButtonText: 'Eliminar',
    }).then((result: any) => {
      if (result.isConfirmed) {
        dispatch(delete_exer(id))
      }
    })
  };

  const onCreate = () => {
    navigate("/admin/exercises/add");
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
  };

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
            src={props.dataItem.premium ? premium : free}
          />
          {props.dataItem.premium ? "Premium" : "Normal"}
        </div>
      </td>
    )
  };

  const pageChange = (event: GridPageChangeEvent) => {
    setPage(event.page);
  };

  let gridPDFExport: GridPDFExport | null;
  const exportPDF = () => {
    setTimeout(() => {
      if (gridPDFExport) {
        gridPDFExport.save(user.exercises as any);
      }
    }, 250);
  };

  useEffect(() => {
    if (admin.delete_exer == 'deleted') {
      Swal.fire(
        'Eliminado',
        'El ejercicio fue eliminado exitosamente',
        'success'
      )
    }
    dispatch(Exercises_Get());

    return ()=>{
      dispatch(reset_delete_exer());
    }
  }, [admin]);

  const grid = (
    <Grid
      data={orderBy(user.exercises as any, sort)?.slice(page.skip, page.skip + page.take)}
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
      <GridColumn field="name" title="Name" />
      <GridColumn field="difficulty" title="Difficulty" />
      <GridColumn field="muscles" title="Muscles" />
      <GridColumn field="premium" title="Plan" cell={planCell} />
      <GridColumn field="actions" title="Action" cell={actionCell} width="150px" />
    </Grid>
  )

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginLeft: "3vw"
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "500",
          margin: "25px 0 10px 0",
        }}
      >
        Exercises
      </h1>
      <button
        style={{
          backgroundColor: "green",
          borderCollapse: "collapse",
          width: "10%",
          margin: "auto",
          padding: "5px",
          marginTop: "20px",
          color: "white",
          fontWeight: "bold",
        }}
        onClick={onCreate}
      >
        + New exercise
      </button>
      {grid}
      <GridPDFExport ref={(pdfExport) => (gridPDFExport = pdfExport)}>
        {grid}
      </GridPDFExport>
    </div>
  );
}
