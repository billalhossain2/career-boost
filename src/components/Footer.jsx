import React from 'react'

const Footer = () => {
  return (
    <footer class="footer p-10  bg-[#1A1919] text-[#c4bfbf]">
  <div>
    <h1 className='text-white font-extrabold text-3xl'>CareerHub</h1>
    <p>There are many variations of passages <br/>
       of Lorem Ipsum , but the majority have <br/>
        suffered alteration in some form.</p>
    <div className='text-3xl space-x-4 text-white'>
    <i class="fa-brands fa-facebook-f"></i>
    <i class="fa-brands fa-twitter"></i>
    <i class="fa-brands fa-instagram"></i>
    </div>
  </div> 
  <div>
    <span class="footer-title text-white font-semibold text-[20px]">Company</span> 
    <a class="link link-hover">Branding</a> 
    <a class="link link-hover">Design</a> 
    <a class="link link-hover">Marketing</a> 
    <a class="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span class="footer-title text-white font-semibold text-[20px]">Product</span> 
    <a class="link link-hover">About us</a> 
    <a class="link link-hover">Contact</a> 
    <a class="link link-hover">Jobs</a> 
    <a class="link link-hover">Press kit</a>
  </div> 
  <div>
    <span class="footer-title text-white font-semibold text-[20px]">Support</span> 
    <a class="link link-hover">Terms of use</a> 
    <a class="link link-hover">Privacy policy</a> 
    <a class="link link-hover">Cookie policy</a>
  </div>
</footer>
  )
}

export default Footer