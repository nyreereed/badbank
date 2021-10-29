function Deposit() {
  return (
    <form>
      <h1>Deposit</h1>
      <div><span>Balance</span>
        <span>$753</span></div>
      <label htmlFor="deposit">Deposit Amount</label>
      <input type="number" required id="deposit" name="deposit" defaultValue={0}/>
      <button type="submit">Submit Deposit</button>
    </form>
  ) 




}

export default Deposit