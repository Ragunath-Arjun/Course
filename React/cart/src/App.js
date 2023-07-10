import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  return <Cart />;
}

function Cart() {
  const [cart,setCart]=useState(0);

  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="#!">Start Bootstrap</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li class="nav-item"><a class="nav-link active" aria-current="page" href="#!">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="#!">About</a></li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#!">All Products</a></li>
                                <li><hr class="dropdown-divider"></hr></li>
                                <li><a class="dropdown-item" href="#!">Popular Items</a></li>
                                <li><a class="dropdown-item" href="#!">New Arrivals</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <button class="btn btn-outline-dark" type="submit">
                            <i class="bi-cart-fill me-1"></i>
                            Cart
                            <sup><span class="badge bg-dark text-white ms-1 rounded-pill">{cart}</span></sup>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    <div className="Header">
        <h6 className="Header-head"><h1>Shop in style</h1>
          With this shop hompeage template
        </h6>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="card">
              <img
                className="card-img-top"
                src="https://fdn.gsmarena.com/imgroot/reviews/20/oneplus-nord/review/lifestyle/-1024w2/gsmarena_001.jpg"
                alt="Card image cap"
              ></img>
              <div className="card-body">
                <h5 className="card-title">Fancy Product</h5>
                <p className="card-text"> $40.00 - $80.00</p>
                <button className="btn btn-primary" onClick={()=>{setCart(cart+1)}}>Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card">
              <img
                className="card-img-top"
                src="https://fdn.gsmarena.com/imgroot/reviews/20/oneplus-nord/review/lifestyle/-1024w2/gsmarena_001.jpg"
                alt="Card image cap"
              ></img>
              <div className="card-body">
                <h5 className="card-title">Fancy Product</h5>
                <p className="card-text"> $40.00 - $80.00</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card">
              <img
                className="card-img-top"
                src="https://fdn.gsmarena.com/imgroot/reviews/20/oneplus-nord/review/lifestyle/-1024w2/gsmarena_001.jpg"
                alt="Card image cap"
              ></img>
              <div className="card-body">
                <h5 className="card-title">Fancy Product</h5>
                <p className="card-text"> $40.00 - $80.00</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card">
              <img
                className="card-img-top"
                src="https://fdn.gsmarena.com/imgroot/reviews/20/oneplus-nord/review/lifestyle/-1024w2/gsmarena_001.jpg"
                alt="Card image cap"
              ></img>
              <div className="card-body">
                <h5 className="card-title">Fancy Product</h5>
                <p className="card-text"> $40.00 - $80.00</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card">
              <img
                className="card-img-top"
                src="https://fdn.gsmarena.com/imgroot/reviews/20/oneplus-nord/review/lifestyle/-1024w2/gsmarena_001.jpg"
                alt="Card image cap"
              ></img>
              <div className="card-body">
                <h5 className="card-title">Fancy Product</h5>
                <p className="card-text"> $40.00 - $80.00</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card">
              <img
                className="card-img-top"
                src="https://fdn.gsmarena.com/imgroot/reviews/20/oneplus-nord/review/lifestyle/-1024w2/gsmarena_001.jpg"
                alt="Card image cap"
              ></img>
              <div className="card-body">
                <h5 className="card-title">Fancy Product</h5>
                <p className="card-text"> $40.00 - $80.00</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card">
              <img
                className="card-img-top"
                src="https://fdn.gsmarena.com/imgroot/reviews/20/oneplus-nord/review/lifestyle/-1024w2/gsmarena_001.jpg"
                alt="Card image cap"
              ></img>
              <div className="card-body">
                <h5 className="card-title">Fancy Product</h5>
                <p className="card-text"> $40.00 - $80.00</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card">
              <img
                className="card-img-top"
                src="https://fdn.gsmarena.com/imgroot/reviews/20/oneplus-nord/review/lifestyle/-1024w2/gsmarena_001.jpg"
                alt="Card image cap"
              ></img>
              <div className="card-body">
                <h5 className="card-title">Fancy Product</h5>
                <p className="card-text"> $40.00 - $80.00</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Footer">
        <h6 className="Footer-head">Copyright © Your Website 2022</h6>
      </div>
    </>
  );
}

export default App;
