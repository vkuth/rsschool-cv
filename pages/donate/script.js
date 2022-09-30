const labels = document.querySelectorAll(".const");
const inputs = document.querySelectorAll(".range-donate_input");

const boxLabels = document.querySelector(".range-amount");
const boxInputs = document.querySelector(".range-donate");

const inputNumber = document.querySelector(".form-amount_input-number");

boxLabels.addEventListener("click", (e) => {
    if (!e.target.classList.contains("const")) return;

    labels.forEach((e) => e.classList.remove("const--active"));
    e.target.classList.add("const--active");
});

boxInputs.addEventListener("click", (e) => {
    if (!e.target.classList.contains("range-donate__input")) return;

    const label = document.querySelector(`[for="${e.target.id}"]`);
    labels.forEach((e) => e.classList.remove("const--active"));
    label.classList.add("const--active");
});

inputNumber.addEventListener("input", function () {
    if (this.value.length > 4) this.value = this.value.slice(0, 4);

    // if (!Number.isFinite(this.value)) this.value = "2";
});

boxInputs.addEventListener("change", (el) => {
    // document.querySelector(".form-amount__input-number").value;
    document.querySelector(".form-amount_input-number").value = el.target.id.slice(1);
});