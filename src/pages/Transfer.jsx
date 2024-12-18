function Transfer() {
    return (
      <div>
        <form>
          <input className="bg-[#FAFBFD] pl-7 py-4 min-w-[400px] rounded-[10px]"
          name="to" type="text" placeholder="Nomor Rekening Tujuan" />
          <input className="bg-[#FAFBFD] pl-7 py-4 min-w-[400px] rounded-[10px]"
          name="amount" type="number" placeholder="Nominal transfer" />
        </form>
      </div>
    );
  }
  
  export default Transfer;