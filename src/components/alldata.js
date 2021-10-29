function AllData() {
  const [show, setShow]         = React.useState(true);


  return (
    <Card
      
      textcolor="black"
      header="All Data"
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

export default AllData