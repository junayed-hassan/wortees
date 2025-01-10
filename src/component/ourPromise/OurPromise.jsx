import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
function OurPromise() {
  return (
    <div className="bg-[#212121] text-white px-36  py-24 text-center font-gilroy">
        <h2 className="text-5xl font-bold">La Nostra Promessa</h2>
        <p className="py-12 text-3xl px-14">Creiamo capi che parlano di te. Ogni capo è un manifesto etico e sostenibile, pensato per celebrare il linguaggio, rispettare il pianeta e durare nel tempo. Perché vestirsi è esprimere chi sei, senza compromessi.</p>
        <button className="text-center gap-4 mx-auto block bg-[#A81A18] py-4 px-7 rounded-xl text-white">
          <span className="pr-2 uppercase">Vedi  tutte</span>
          <span>
            <ArrowForwardIcon />
          </span>
        </button>
    </div>
  )
}

export default OurPromise