import React from "react"
import { meetBar } from "../../Data"
import style from "./MeetingOption.module.css"
import CustomButton from "../../Atom/Button/Button"

export default function MeetingOption(){

    return(
       <div className={style.main}>
       {meetBar.map((e)=><div className={style.options}>
          {e.icon}
          <p>
            {e.action}
          </p>
        </div>)}
        <CustomButton text="End"/>
       </div>
    )
}