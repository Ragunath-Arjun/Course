import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Pricinggrid1 />
  )
}

function Pricinggrid1(){
  return(
    <section className="pricing">
    <div className='container'>
      <div className='row'>
        <div className='col-lg-4 col-md-6 col-sm-12 col-xl-4'>
          <div className="pg-1 card">
            <div className="pg-1-about">
              <h4 className="text-center text-muted fs">FREE</h4>
              <h1 className="text-center">$0<span className="month">/month</span></h1>
              <hr></hr>
              <ul class="fa-ul">
              <li><span class="fa-li"><i class="fa fa-check"></i></span>Single User</li>
              <li><span class="fa-li"><i class="fa fa-check"></i></span>5GB Storage</li>
              <li><span class="fa-li"><i class="fa fa-check"></i></span>Unlimited Public Projects</li>
              <li><span class="fa-li"><i class="fa fa-check"></i></span>Community Access</li>
              <li class="text-muted"><span class="fa-li"><i class="fa fa-times"></i></span>Unlimited
                Private Projects</li>
              <li class="text-muted"><span class="fa-li"><i class="fa fa-times"></i></span>Dedicated
                Phone Support</li>
              <li class="text-muted"><span class="fa-li"><i class="fa fa-times"></i></span>Free Subdomain
              </li>
              <li class="text-muted"><span class="fa-li"><i class="fa fa-times"></i></span>Monthly Status
                Reports</li>
            </ul>
            <div class="d-grid">
              <a href="#" class="btn btn-primary text-uppercase">Button</a>
            </div>
            </div>
        </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 col-xl-4">
            <div className="pg-2">
            <div className="pg-2-about">
              <h4 className="text-center text-muted fs">PLUS</h4>
              <h1 className="text-center">$9<span className="month">/month</span></h1>
              <hr></hr>
              <ul class="fa-ul">
              <li><span class="fa-li"><i class="fa fa-check"></i></span><strong>5 Users</strong></li>
              <li><span class="fa-li"><i class="fa fa-check"></i></span>50GB Storage</li>
              <li><span class="fa-li"><i class="fa fa-check"></i></span>Unlimited Public Projects</li>
              <li><span class="fa-li"><i class="fa fa-check"></i></span>Community Access</li>
              <li><span class="fa-li"><i class="fa fa-check"></i></span>Unlimited Private Projects</li>
              <li><span class="fa-li"><i class="fa fa-check"></i></span>Dedicated Phone Support</li>
              <li><span class="fa-li"><i class="fa fa-check"></i></span>Free Subdomain</li>
              <li class="text-muted"><span class="fa-li"><i class="fa fa-times"></i></span>Monthly Status
                Reports</li>
            </ul>
            <div class="d-grid">
              <a href="#" class="btn btn-primary text-uppercase">Button</a>
            </div>
            </div>
            </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 col-xl-4">
            <div className="pg-3">
            <div className="pg-3-about">
              <h4 className="text-center text-muted fs">PRO</h4>
              <h1 className="text-center">$49<span className="month">/month</span></h1>
              <hr></hr>
              <ul class="fa-ul">
              <li><span class="fa-li"><i class="fa fa-check"></i></span><strong>Unlimited Users</strong>
              </li>
              <li><span class="fa-li"><i class="fa fa-check"></i></span>150GB Storage</li>
              <li><span class="fa-li"><i class="fa fa-check"></i></span>Unlimited Public Projects</li>
              <li><span class="fa-li"><i class="fa fa-check"></i></span>Community Access</li>
              <li><span class="fa-li"><i class="fa fa-check"></i></span>Unlimited Private Projects</li>
              <li><span class="fa-li"><i class="fa fa-check"></i></span>Dedicated Phone Support</li>
              <li><span class="fa-li"><i class="fa fa-check"></i></span><strong>Unlimited</strong> Free
                Subdomains</li>
              <li><span class="fa-li"><i class="fa fa-check"></i></span>Monthly Status Reports</li>
            </ul>
            <div class="d-grid">
              <a href="#" class="btn btn-primary text-uppercase">Button</a>
            </div>


            </div>

         
      </div>
    </div>
    </div>
    </div>
    </section>
  )
}

export default App;
