export class Cart {
  render() {
    return `
      <div>
        Cart
        <ul class="list-group" style="margin-top: 1em;">
          <li class="list-group-item d-flex justify-content-between align-items-center">
              Cras justo odio ($213)
              <a href="#" class="btn">➕</a>
              <a href="#" class="btn">➖</a>
              <span class="badge bg-primary rounded-pill">14</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
              Cras justo odio ($213)
              <a href="#" class="btn">➕</a>
              <a href="#" class="btn">➖</a>
              <span class="badge bg-primary rounded-pill">14</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
              Cras justo odio ($213)
              <a href="#" class="btn">➕</a>
              <a href="#" class="btn">➖</a>
              <span class="badge bg-primary rounded-pill">14</span>
          </li>
        </ul>
        <p>
            Summary: 12 products, $1289
        </p>
      </div>
    `;
  }
}
