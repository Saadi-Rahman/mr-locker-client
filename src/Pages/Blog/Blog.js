import React from 'react';
import img1 from '../../assets/SQLvsNoSQL.PNG';
import img2 from '../../assets/JsVSnode.PNG';
import RightSidebar from '../Shared/RightSidebar/RightSidebar';


const Blog = () => {
    return (
        <div className='pb-5'>
            <div className='bg-banner-comon'>
                <div className="mask-comon">
                    <div className="container d-flex justify-content-start align-items-center h-100">
                        <h1 className='text-warning fw-bold my-4 py-5'>Mr. Lockers' Weekly Blog</h1>
                    </div>
                </div>
            </div>

            <div className='container my-5 pb-5'>
                <div className='row'>
                    <div className='col-md-8 col-lg-8 mb-5'>
                        <h3 className='pt-3 pb-2'>Difference between NoSQL and SQL</h3>
                        <div className='border-start ps-4'>
                            <p>From analysts and engineers to IT decision makers, many are familiar with Relational Database Management Systems (RDBMS) and the Structured Query Language (SQL) used to interact with them. While these terms refer to a decades-old paradigm which remains a wide standard, today the sheer variety and depth of database systems can be dizzying. What’s more, rising volumes of unstructured data, availability of storage and processing power, and evolving analytic requirements have generated interest in fundamentally different technologies. <br /><br />
                            Collectively known as NoSQL, these popular alternatives to traditional RDBMSs show promise for a variety of modern use cases. To make informed decisions about which to use, practitioners should be aware of the differences between SQL, NoSQL, individual Database Management Systems (DBMS) and languages, as well as the situations each is best-suited for, and how the landscape is changing. </p>
                        </div>
                            <div className='text-center'>
                                <img src={img1} className='p-md-2 img-fluid' alt="" />
                            </div>
                            <br />
                        <div className='border-start ps-4'>
                            <p>Remember that SQL dialects share many properties though they interface with distinct databases. Flavors of NoSQL vary far more across their attendant systems, so comparison can be more useful between multiple non-relational technologies vs. SQL generally. <br /> <br />
                            Perhaps the most recognizable SQL dialect is MySQL, an open source and free RDBMS (though available through proprietary licenses as well). Its use is widespread in web applications, and it is known for compatibility, support, and good performance in the average case. MySQL has also made concessions to NoSQL practitioners with features like a JSON data type, the “Document Store,” and support for sharding (horizontal scaling).</p>
                        </div>
                        <br /><br />

                        <h3 className='pt-3 pb-2'>What is JWT, and how does it work?</h3>
                        <div className='border-start ps-4'>
                            <h5>What is JWT (JSON Web Token)?</h5>
                            <p>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved. <br /> <br />
                            The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted. JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.</p> <br />

                        </div>
                            <div className='text-center'>
                            <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--VEc3u5IA--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/xdc4axtmpwsut743q2s2.png" className='p-2 w-50' alt="" />
                        </div>

                        <div className='border-start ps-4'>
                            <h5>How it works?</h5>
                            <p>Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.</p>

                            <p>1. User sign-in using username and password or google/facebook. <br />
                            2. Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. <br />
                            3. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. <br />
                            4. Resource server then verifies the authenticity of the token using the secret salt/ public key.</p> <br />
                        </div>

                        <div className='text-center'>
                            <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--paCGhFRY--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/tppls6i2nbdqevr2nybr.png" className='p-2 w-75' alt="" />
                        </div>
                        <br /><br />
                        

                        <h3 className='pt-3 pb-2'>What is the difference between javascript and NodeJS?</h3>
                        <div className='border-start ps-4'>
                            <h5>Node.js</h5>
                            <p>NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. </p>

                            <h5>Javascript</h5>
                            <p>Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.  </p> <br />
                        </div>
                        <div className='text-center'>
                            <img src={img2} className='p-md-2 img-fluid' alt="" />
                        </div>
                        <br /><br />

                        <h3 className='pt-3 pb-2'>How does NodeJS handle multiple requests at the same time?</h3>
                        <div  className='border-start ps-4'>
                            <h5>Node.js</h5>
                            <p>Node.js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node.js wastes no time or resources on waiting for I/O requests to return.</p>
                            
                            <h5>How does Node.js work?</h5>
                            <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                        </div>
                            <div className='text-center'>
                            <img src="https://strongloop.com/blog-assets/2014/01/threading_node.png" className='p-2 w-75' alt="" />
                            </div> 
                            <br />
                        <div  className='border-start ps-4'>
                            <h5>How NodeJS handle multiple client requests?</h5>
                            <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. <br />

                            If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
                        </div>
                    </div>
                    <div className='col-md-4 col-lg-4 mb-5'>
                        <RightSidebar></RightSidebar>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;