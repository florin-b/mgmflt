

class UtilsAddreses {

	static getFormattedAddress(adresa) {

		let addr = '';

		if (adresa.codJudet !== "")
			addr = UtilsAddreses.getNumeJudet(adresa.codJudet);

		if (adresa.localitate !== "")
			addr += ", " + adresa.localitate
		

		if (adresa.strada !== "")
			addr +=", " + adresa.strada;
		

		if (adresa.nrStrada !== "")
			addr += ", " + adresa.nrStrada;

		return addr;
	}

	static validareSosire(traseu) {
		return traseu.sosire === null ? "" : traseu.sosire.data;
	}

	static validarePlecare(traseu) {
		if (traseu.plecare === null)
			return "";
		else
			return traseu.plecare.data;
	}


	static getNumeJudet(codJudet) {
		let retVal = "";

		if (codJudet === "01")
			retVal = "ALBA";

		if (codJudet === "02")
			retVal = "ARAD";

		if (codJudet === "03")
			retVal = "ARGES";

		if (codJudet === "04")
			retVal = "BACAU";

		if (codJudet === "05")
			retVal = "BIHOR";

		if (codJudet === "06")
			retVal = "BISTRITA-NASAUD";

		if (codJudet === "07")
			retVal = "BOTOSANI";

		if (codJudet === "09")
			retVal = "BRAILA";

		if (codJudet === "08")
			retVal = "BRASOV";

		if (codJudet === "40")
			retVal = "BUCURESTI";

		if (codJudet === "10")
			retVal = "BUZAU";

		if (codJudet === "51")
			retVal = "CALARASI";

		if (codJudet === "11")
			retVal = "CARAS-SEVERIN";

		if (codJudet === "12")
			retVal = "CLUJ";

		if (codJudet === "13")
			retVal = "CONSTANTA";

		if (codJudet === "14")
			retVal = "COVASNA";

		if (codJudet === "15")
			retVal = "DAMBOVITA";

		if (codJudet === "16")
			retVal = "DOLJ";

		if (codJudet === "17")
			retVal = "GALATI";

		if (codJudet === "52")
			retVal = "GIURGIU";

		if (codJudet === "18")
			retVal = "GORJ";

		if (codJudet === "19")
			retVal = "HARGHITA";

		if (codJudet === "20")
			retVal = "HUNEDOARA";

		if (codJudet === "21")
			retVal = "IALOMITA";

		if (codJudet === "22")
			retVal = "IASI";

		if (codJudet === "23")
			retVal = "ILFOV";

		if (codJudet === "24")
			retVal = "MARAMURES";

		if (codJudet === "25")
			retVal = "MEHEDINTI";

		if (codJudet === "26")
			retVal = "MURES";

		if (codJudet === "27")
			retVal = "NEAMT";

		if (codJudet === "28")
			retVal = "OLT";

		if (codJudet === "29")
			retVal = "PRAHOVA";

		if (codJudet === "31")
			retVal = "SALAJ";

		if (codJudet === "30")
			retVal = "SATU-MARE";

		if (codJudet === "32")
			retVal = "SIBIU";

		if (codJudet === "33")
			retVal = "SUCEAVA";

		if (codJudet === "34")
			retVal = "TELEORMAN";

		if (codJudet === "35")
			retVal = "TIMIS";

		if (codJudet === "36")
			retVal = "TULCEA";

		if (codJudet === "38")
			retVal = "VALCEA";

		if (codJudet === "37")
			retVal = "VASLUI";

		if (codJudet === "39")
			retVal = "VRANCEA";

		return retVal;
	}

}

export default UtilsAddreses;