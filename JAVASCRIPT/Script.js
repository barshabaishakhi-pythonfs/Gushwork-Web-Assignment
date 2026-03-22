// Sticky Header Logic
const navbar = document.querySelector('.navbar');
const firstFoldHeight = window.innerHeight; // Height of the first fold (hero section)

window.addEventListener('scroll', () => {
    if (window.scrollY > firstFoldHeight) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});


const processData = {
  raw: {
    title: "High-Grade Raw Material Selection",
    desc: "Vacuum sizing tanks ensure precise outer diameter while internal pressure maintains perfect roundness and wall thickness uniformity.",
    img:"https://cdn.prod.website-files.com/62aeab893263c7c484964e68/692f8d67dd328ae2319d396c_photo-1584267263732-ff1654e8566d.webp"
  },
  extrusion: {
    title: "Advanced Extrusion Technology",
    desc: "Our high-torque extruders ensure homogeneous melting and consistent flow for maximum structural integrity.",
    img: "https://usmasterbatch.com/wp-content/uploads/2024/04/HDPE-Pipe-Extrusion-Process.jpg"
  },
  cooling: {
    title: "Multi-Stage Vacuum Cooling",
    desc: "Controlled water spray and vacuum systems gradually cool the pipe to set its structure without creating internal material stress.",
    list: ["Vacuum-stabilized dimensions", "Multi-zone temperature control"],
    img: "https://scontent.fixe1-1.fna.fbcdn.net/v/t39.30808-6/650709115_1330923625723657_5889949038894451836_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_ohc=KZMfDgfNseMQ7kNvwEid9dm&_nc_oc=Adqlv4onU9kvSzRQoeZEu70TGNgLPuDl9cTEbsRUNrPOa9bZJlC_q0qy0HAIyTtI0n3tkzRO4MLjYCn7n-w_xsvR&_nc_zt=23&_nc_ht=scontent.fixe1-1.fna&_nc_gid=vTlApa5VmBCWJQ3weV0N_A&_nc_ss=7a30f&oh=00_Afwgj93MdBksrUsct5ojZ4w0zzZ5iS0Cb72NPSS7VgSY9A&oe=69C54941"
  },
  sizing: {
    title: "Precision Vacuum Sizing",
    desc: "Vacuum sizing tanks ensure precise outer diameter while internal pressure maintains perfect roundness and wall thickness uniformity.",
    list: ["Strict dimensional tolerances", "Perfect roundness maintenance"],
    img: "https://www.researchgate.net/profile/Jorn-Mehnen/publication/263507629/figure/fig3/AS:667835588165643@1536235820978/describes-the-steps-involved-in-the-quantitative-sizing-of-the-damaged-area-on-the.png"
  },
  qc: {
    title: "Rigorous Quality Control",
    desc: "Every batch undergoes ultrasonic testing and hydrostatic pressure trials to ensure compliance with international safety standards.",
    list: ["Ultrasonic thickness gauging", "Hydrostatic pressure testing"],
    img: "https://www.hwmfg.com/wp-content/uploads/2019/09/Quality-Process-Graphic-FINALNOTEXT-2.jpg"
  }
};

const tabs = document.querySelectorAll('.nav-item');
const title = document.getElementById('content-title');
const desc = document.getElementById('content-desc');
const img = document.getElementById('content-img');
const listContainer = document.querySelector('.process-list');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // 1. Switch active class
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // 2. Get data for the selected tab
    const data = processData[tab.dataset.target];
    
    if (data) {
      // 3. Update Text and Image
      title.innerText = data.title;
      desc.innerText = data.desc;
      img.src = data.img;

      // 4. Update the Bullet Points (List)
      listContainer.innerHTML = data.list.map(item => `
        <li><span class="blue-check">●</span> <span class="list-text">${item}</span></li>
      `).join('');
    }
  });
});