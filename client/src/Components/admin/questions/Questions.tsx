import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { get_questions } from '../../../features/admin/admin';
import Loading from '../../loading/Loading';
import Question from './Question';


export default function Questions() {

  const dispatch = useAppDispatch();
  const admin = useAppSelector(state => state.admin);

  useEffect(() => {

    if (admin.question_status === 'default'){
      dispatch(get_questions());
    }
  }, [admin.question_status]);

  return (
    <div style={{ width: "100%", marginLeft: "3vw"}}>
      {
        admin.question_status === 'default' ?
          <Loading />
          :
          <div>
            <h1
            style={{
              fontSize: "3rem",
              fontWeight: "500",
              margin: "25px 0 10px 0",
            }}
            >Questions</h1>
            {
              admin.questions?.map((question: any, i:number) => (
                <Question
                datos={question}
                index={i}
                />
              ))
            }
          </div>
      }
    </div>
  )
}
