import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
function FooterTop() {
  return (
    <>
      <div>
        <div>
          <p>
            &quot;Non Console nulla al mondo che abbia tanto potere quanto la
            parola. A volte ne scrivo una, e la guardo, fino a quando non
            comincia a splendere&quot;
          </p>
          <strong>Emily Dickinson</strong>
        </div>
        <div>
          <div>
            <img src="" alt="" />
            <p>Since 2018 proudly made with ♥ in Italy</p>
            <input type="email" placeholder="Your email address" />
            <button className="text-center gap-4 mx-auto block bg-[#A81A18] py-4 px-7 rounded-xl text-white">
              <span className="pr-2 uppercase">Subscribe</span>
              <span>
                <ArrowForwardIcon />
              </span>
            </button>
          </div>
          <img src="" alt="" />
        </div>
      </div>
    </>
  );
}

export default FooterTop;
