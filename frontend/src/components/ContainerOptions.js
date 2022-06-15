import styled from "styled-components"

export const BoxOptions = styled.div`
width: 25% ;
display:flex;
flex-direction: column ;
color: black;
justify-content: space-between;
align-items: center;
font-size: 15px;
height: 50px;
margin: 5px;
`

export const ContainerOptions = (props) => {
  return (
    <div>
      <BoxOptions>
        <p><b>{props.title}</b></p>
        <p>{props.value}</p>
      </BoxOptions>
    </div>
  )
}