
document.addEventListener("DOMContentLoaded", () => {


  /* =====================================================
     2️⃣ LIGHT PRODUCTS JS
  ===================================================== */
  document.querySelectorAll(".product-card").forEach(card => {

    const qtyInput     = card.querySelector(".qty");
    const priceSpan    = card.querySelector(".price");
    const subtotalSpan = card.querySelector(".subtotal");
    const plusBtn      = card.querySelector(".plus");
    const minusBtn     = card.querySelector(".minus");
    const buyBtn       = card.querySelector(".buy-now");
    const productName  = card.querySelector("h3").innerText;
    const productImg   = card.querySelector(".product-image");

    let basePrice = Number(priceSpan.innerText.replace(/[^\d]/g, "")) || 0;

    function updateSubtotal() {
      const qty = Number(qtyInput.value) || 1;
      subtotalSpan.innerText = `Subtotal: ₹${basePrice * qty}`;
    }

    plusBtn?.addEventListener("click", e => {
      e.preventDefault();
      qtyInput.value++;
      updateSubtotal();
    });

    minusBtn?.addEventListener("click", e => {
      e.preventDefault();
      if (qtyInput.value > 1) {
        qtyInput.value--;
        updateSubtotal();
      }
    });

    card.querySelectorAll(".color-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        basePrice = Number(btn.dataset.price) || basePrice;
        priceSpan.innerText = `₹${basePrice}`;
        if (btn.dataset.image) productImg.src = btn.dataset.image;
        updateSubtotal();
      });
    });

    buyBtn.addEventListener("click", e => {
      e.preventDefault();
      const qty = qtyInput.value;

      const msg =
`Hello, I want to buy:

Product: ${productName}
Quantity: ${qty}
Total Price: ₹${basePrice * qty}`;

      window.open(
        `https://wa.me/918178298205?text=${encodeURIComponent(msg)}`,
        "_blank"
      );
    });

    updateSubtotal();
  });


  /* =====================================================
     3️⃣ HOME APPLICATION PRODUCTS JS
  ===================================================== */
  document.querySelectorAll(".home-ap-product-card").forEach(card => {

    const qtyInput   = card.querySelector('input[type="number"]');
    const minusBtn   = card.querySelector(".home-ap-minus");
    const plusBtn    = card.querySelector(".home-ap-plus");
    const priceEl    = card.querySelector(".home-ap-price");
    const subtotalEl = card.querySelector(".home-ap-subtotal");
    const typeSelect = card.querySelector(".home-ap-type");
    const productName = card.querySelector(".home-ap-info h3").innerText;

    function getPrice() {
      const key = "price" + typeSelect.value;
      if (card.dataset[key]) return Number(card.dataset[key]);

      for (let k in card.dataset) {
        if (k.startsWith("price")) return Number(card.dataset[k]);
      }
      return 0;
    }

    function updateUI() {
      const price = getPrice();
      const qty = Number(qtyInput.value) || 1;

      priceEl.innerText = `₹${price} / piece`;
      subtotalEl.innerText = `Subtotal: ₹${price * qty}`;
    }

    plusBtn.addEventListener("click", e => {
      e.preventDefault();
      qtyInput.value++;
      updateUI();
    });

    minusBtn.addEventListener("click", e => {
      e.preventDefault();
      if (qtyInput.value > 1) {
        qtyInput.value--;
        updateUI();
      }
    });

    typeSelect.addEventListener("change", updateUI);

    card.querySelector(".home-ap-buy")?.addEventListener("click", e => {
      e.preventDefault();
      const price = getPrice();
      const qty = qtyInput.value;

      const msg =
`Hello, I want to buy:

Product: ${productName}
Type: ${typeSelect.options[typeSelect.selectedIndex].text}
Quantity: ${qty}
Total: ₹${price * qty}`;

      window.open(
        `https://wa.me/918178298205?text=${encodeURIComponent(msg)}`,
        "_blank"
      );
    });

    updateUI();
  });

});


// WIRE START JS

document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".product").forEach(product => {

    const sizeSelect   = product.querySelector(".wire-size");
    const qtyInput     = product.querySelector(".qty");
    const priceText    = product.querySelector(".price");
    const subtotalText = product.querySelector(".subtotal");
    const plusBtn      = product.querySelector(".plus");
    const minusBtn     = product.querySelector(".minus");
    const buyBtn       = product.querySelector(".buy-nowes");

    // price from data-price-xx
    function getPrice() {
      const size = sizeSelect.value;   // 10,15,20,30
      return Number(product.dataset["price-" + size]) || 0;
    }

    function updateTotal() {
      const price = getPrice();
      const qty   = Number(qtyInput.value) || 1;

      priceText.innerText = `₹${price} / meter`;
      subtotalText.innerText = `Subtotal: ₹${price * qty}`;
    }

    // size change
    sizeSelect.addEventListener("change", updateTotal);

    // plus button
    plusBtn.addEventListener("click", e => {
      e.preventDefault();
      qtyInput.value++;
      updateTotal();
    });

    // minus button
    minusBtn.addEventListener("click", e => {
      e.preventDefault();
      if (qtyInput.value > 1) {
        qtyInput.value--;
        updateTotal();
      }
    });

    // manual qty input
    qtyInput.addEventListener("input", updateTotal);

    // buy now whatsapp
    buyBtn.addEventListener("click", e => {
      e.preventDefault();

      const msg =
`Hello, I want to buy Wire

Product: ${product.querySelector(".info h3").innerText}
Size: ${sizeSelect.options[sizeSelect.selectedIndex].text}
Quantity: ${qtyInput.value} meter
Price per meter: ₹${getPrice()}
Total: ₹${getPrice() * qtyInput.value}`;

      window.open(
        `https://wa.me/918178298205?text=${encodeURIComponent(msg)}`,
        "_blank"
      );
    });

    // initial load
    updateTotal();
  });

});

//  MODULAR JS

document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".modular-product").forEach(product => {

    const sizeSelect   = product.querySelector(".modular-size");
    const qtyInput     = product.querySelector(".modular-qty");
    const priceText    = product.querySelector(".modular-price");
    const subtotalText = product.querySelector(".modular-subtotal");
    const plusBtn      = product.querySelector(".modular-plus");
    const minusBtn     = product.querySelector(".modular-minus");
    const buyBtn       = product.querySelector(".modular-buy");

    // get price from data-price-xx
    function getPrice() {
      const size = sizeSelect.value;   // 10,15,20...
      return Number(product.dataset["price-" + size]) || 0;
    }

    function updateTotal() {
      const price = getPrice();
      const qty   = Number(qtyInput.value) || 1;

      priceText.innerText = `₹${price} / piece`;
      subtotalText.innerText = `Subtotal: ₹${price * qty}`;
    }

    // size change
    sizeSelect.addEventListener("change", updateTotal);

    // plus
    plusBtn.addEventListener("click", e => {
      e.preventDefault();
      qtyInput.value++;
      updateTotal();
    });

    // minus
    minusBtn.addEventListener("click", e => {
      e.preventDefault();
      if (qtyInput.value > 1) {
        qtyInput.value--;
        updateTotal();
      }
    });

    // manual qty
    qtyInput.addEventListener("input", updateTotal);

    // buy now whatsapp
    buyBtn.addEventListener("click", e => {
      e.preventDefault();

      const msg =
`Hello, I want to buy Modular Catalogue

Product: ${product.querySelector(".modular-info h3").innerText}
Module Size: ${sizeSelect.options[sizeSelect.selectedIndex].text}
Quantity: ${qtyInput.value}
Price per piece: ₹${getPrice()}
Total: ₹${getPrice() * qtyInput.value}`;

      window.open(
        `https://wa.me/918178298205?text=${encodeURIComponent(msg)}`,
        "_blank"
      );
    });

    // initial load
    updateTotal();
  });

});

// ======================== HOLDERS and TWO PINs JS ========================

document.addEventListener("DOMContentLoaded", function () {

  const cards = document.querySelectorAll(".tp-product-card");

  cards.forEach(card => {

    const typeSelect = card.querySelector(".tp-type");
    const qtyInput   = card.querySelector(".tp-qty");
    const priceEl    = card.querySelector(".tp-price");
    const subtotalEl = card.querySelector(".tp-subtotal");
    const plusBtn    = card.querySelector(".tp-plus");
    const minusBtn   = card.querySelector(".tp-minus");
    const buyBtn     = card.querySelector(".tp-buy-now");

    // ======================== Update Function ========================
    function update() {
      const qty = parseInt(qtyInput.value, 10);
      const type = typeSelect.value;

      const price =
        type === "2"
          ? parseInt(card.getAttribute("data-price-2"), 10)
          : parseInt(card.getAttribute("data-price-5"), 10);

      priceEl.innerText =
        type === "2"
          ? `₹${price} / piece`
          : `₹${price} / box`;

      subtotalEl.innerText = `Subtotal: ₹${price * qty}`;
    }

    // ======================== Plus / Minus Buttons ========================
    plusBtn.onclick = () => {
      qtyInput.value = parseInt(qtyInput.value, 10) + 1;
      update();
    };

    minusBtn.onclick = () => {
      if (parseInt(qtyInput.value, 10) > 1) {
        qtyInput.value = parseInt(qtyInput.value, 10) - 1;
        update();
      }
    };

    // ======================== Quantity Input ========================
    qtyInput.oninput = () => {
      if (qtyInput.value < 1 || isNaN(qtyInput.value)) qtyInput.value = 1;
      update();
    };

    // ======================== Type Selection ========================
    typeSelect.onchange = update;

    // ======================== Buy Now Button ========================
    buyBtn.onclick = () => {
      const qty = parseInt(qtyInput.value, 10);
      const type = typeSelect.value;

      const price =
        type === "2"
          ? parseInt(card.getAttribute("data-price-2"), 10)
          : parseInt(card.getAttribute("data-price-5"), 10);

      const total = price * qty;

      // Example action: open checkout page
      // You can replace this with your real checkout link
      window.location.href = `/checkout?type=${type}&qty=${qty}&total=${total}`;

      // Or for testing, you can just use alert:
      // alert(`Buying ${qty} item(s) of type ${type}. Total: ₹${total}`);
    };

    // ======================== Initial Update ========================
    update();

  });

});
