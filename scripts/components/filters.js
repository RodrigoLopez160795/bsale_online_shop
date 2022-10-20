export function Filters() {
  return `
        <div>
        <button id="js-show-filters" class="options-button">Filters
        <img src="../../assets/images/angle-down.svg" alt="Search">
        </button>
        <form id="js-filters" class="display_none filters-options">
            <p>Price</p>
            <div class="form-input-price">
                <div class="form-input-price--item">
                    <img src="../../assets/images/sack-dolar.svg" alt="min">
                    <input type="number" placeholder="min" name="min">
                </div>
                <img src="../../assets/images/minus.svg" id="minus">
                <div class="form-input-price--item">
                    <img src="../../assets/images/sack-dolar.svg" alt="max">
                    <input type="number" placeholder="max" name="max">
                </div>
            </div>
            <div class="form-input-discount">
                <label for="discount">With promo?</label>
                <input type="checkbox" name="discount" id="discount">
            </div>
            <button type="submit" class="options-container--button">Done</button>
        </form>
        </div>
    `;
}
