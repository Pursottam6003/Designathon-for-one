import React from "react"
import removeLogo from "../../images/logo/remove.svg"

export const List = (props) => {
  const {items, itemType} = props
  let heading = ''
  
  const rows = items.map((item, i) => {
    if (itemType === "PI") {
      heading = "Principal investigators"
      return (
        <tr key={i}>
          <td className="tr-number">{i+1}</td>
          <td>{item.name}</td>
          <td>{item.designation}</td>
          <td>{item.department}</td>
          <td className="rm-td">
            <button className="rm" onClick={(e) => {e.preventDefault(); props.removeItem(i, "PI")}}>
              <img src={removeLogo} alt="Remove" />
            </button>
          </td>
        </tr>
      )
    } else if (itemType === "CoPI") {
      heading = "Co-principal investigators"
      return (
        <tr key={i}>
          <td className="tr-number">{i+1}</td>
          <td>{item.name}</td>
          <td>{item.designation}</td>
          <td>{item.department}</td>
          <td>{item.insName}</td>
          <td className="rm-td">
            <button className="rm" onClick={(e) => {e.preventDefault(); props.removeItem(i, "CoPI")}}>
              <img src={removeLogo} alt="Remove" />
            </button>
          </td>
        </tr>
      )
    } else {
      heading = "Authors"
      return (
        <tr key={i}>
          <td className="tr-number">{i+1}</td>
          <td>{item.lastName}</td>
          <td>{item.firstInitials}</td>
          <td className="rm-td">
            <button className="rm" onClick={(e) => {e.preventDefault(); props.removeItem(i, "author")}}>
              <img src={removeLogo} alt="Remove" />
            </button>
          </td>
        </tr>
      )
    }
  })

  if (items.length > 0) {
    return (
      <div className="list-component">
        <h4 className="list-heading">{heading}</h4>
        <table className="list-table">
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    )
  } else {
    return <></>
  }
}