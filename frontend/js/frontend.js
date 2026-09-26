console.log("Frontend JS loaded");

function Listings() {
  const me = {};

  me.showerror = ({ msg, res, type = "danger" } = {}) => {
    //show an error using bootstrap alerts in the main tag of the page
    const main = document.querySelector("main");
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.role = "alert";
    alert.innerHTML = `${msg}: ${res.status} ${res.statusText}`;
    main.prepend(alert);
  };

  const renderListing = (listings) => {
    const listingsDiv = document.getElementById("listings");
    for (const { title, address, price } of listings) {
        const card = document.createElement("div");
        card.className = "card mb-3";
        card.innerHTML = `
            <div>${title} ${address} ${price}</div>
        `;
        listingsDiv.appendChild(card);
    }
  }
  me.refreshListings = async () => {
    const res = await fetch("/api/listings");
    if (!res.ok) {
      console.error("Failed to fetch listings", res.status, res.statusText);
      me.showerror({ msg: "Failed to fetch listings", res });
      return;
    }

    const data = await res.json();
    console.log("Fetched listings:", data);

    const listingsDiv = document.getElementById("listings");
    listingsDiv.innerHTML = ""; // Clear previous listings

    renderListing(data.listings);
  };
  return me;
}

const MyListings = Listings();

MyListings.refreshListings();
