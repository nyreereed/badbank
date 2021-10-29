function Withdraw() {
  const [show, setShow]         = React.useState(true);


  return (
    <Card
      
      textcolor="black"
      header="Withdraw"
      status={status}
      body={show ? (
        <>
       
        </>
      ):(
        <>
        <h5>Login Successful!</h5>
        
        </>
      )}
    />
  )
}

export default Withdraw