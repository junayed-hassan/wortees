
function Information() {
  return (
    <div className="px-10 text-center mb-28">
        <h2 className="text-5xl font-semibold text-center">3 Facts About Wortees.</h2>
        <div className="grid grid-cols-3 gap-10 pt-16">
            <div className="bg-white border rounded-xl">
                <h3 className="pt-10 text-3xl font-semibold text-center pb-7 ">Artigianale</h3>
                <p className="px-2 pb-10 text-base">Sono fatta a mano in Italia. Eventuali imperfezioni non sono da considerarsi difetti, ma dimostrazione della lavorazione artigianale.</p>
            </div>
            <div className="bg-white border rounded-xl">
                <h3 className="pt-10 text-3xl font-semibold text-center pb-7 ">Eco Friendly</h3>
                <p className="px-2 pb-10 text-base">Sono fatta con materiali organici e naturali. Quel poco di plastica che troverai in me è plastica riciclata con processi sostenibili e riciclabile.</p>
            </div>
            <div className="bg-white border rounded-xl">
                <h3 className="pt-10 text-3xl font-semibold text-center pb-7 ">Durevole</h3>
                <p className="px-2 pb-10 text-base">Sono fatta per durare a lungo, per diventare la tua seconda pelle. Utilizzo solo materiali di primissima qualità. Prenditi cura di me.</p>
            </div>
        </div>
    </div>
  )
}

export default Information