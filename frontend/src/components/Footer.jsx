function Footer(){
    return(<>
     <footer className="bg-dark text-white pt-5 mt-5" id='footer'>
        <div className="container">
            <div className="row py-5 text-center">
            
                <div className="col-md-4">
                    <h5>About Us</h5>
                    <p>We are a leading fitness platform dedicated to helping you achieve your health goals. Join us for personalized training plans and expert advice.</p>
                </div>
                <div className="col-md-4">
                    <h5>Quick Links</h5>
                    <ul className="list-unstyled">
                        <li><a href="#" className="text-white">Home</a></li>
                        <li><a href="#" className="text-white">About</a></li>
                        <li><a href="#" className="text-white">Services</a></li>
                        <li><a href="#" className="text-white">Contact</a></li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h5>Contact Us</h5>
                    <ul className="list-unstyled">
                        <li><i className="fas fa-envelope"></i> info@CoreCraze.com</li>
                        <li><i className="fas fa-phone"></i> +123 456 7890</li>
                        <li><i className="fas fa-map-marker-alt"></i> 123 Fitness St, Healthy City</li>
                    </ul>
                    <div>
                        <a href="#" className="text-white mr-3"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="text-white mr-3"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="text-white mr-3"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div className="text-center py-3">
                <p className="mb-0">&copy; 2024 CoreCraze. All rights reserved.</p>
            </div>
        </div>
    </footer>
    </>)
}
export default Footer