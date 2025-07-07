window.physicsResearchContent = {
  "Working at CERN": `
    <i style="color: #33658A;">ZDC Data Acquisition</i>
    <p>In the Fall of 2022, I traveled to CERN to help prepare the CMS Zero Degree Calorimeters (ZDCs) for data taking. 
    CMS has two ZDC detectors, each located 140 meters down the beamline from either side of the interaction point. Their 
    purpose is to detect energy deposits from the neutral particles (photons and neutrons) resulting from heavy ion collisions. 
    Because of their neutral charge, these particles are unaffected by CMS magnets and continue traveling down the beamline 
    until they hit the ZDCs.</p>
    <p>For my first task at CERN, I tested the performance of one of these ZDCs above ground. After operational tests, the 
    detector was lowered into the tunnel and I assisted with installation. This involved debugging the ZDC's data acquisition system 
    to ensure successful transfer of data from the detector to above-ground electronics.</p>
    <figure style="text-align: center;">
      <img src="Images/lhc_tunnel.jpg" alt="LHC Tunnel" style="display: block; margin: auto; max-width: 60%; height: auto;">
      <figcaption>One of the ZDC detectors in the LHC tunnel</figcaption>
    </figure>

    <i style="color: #33658A;">CMS Control Center Shifts</i>
  `,

  "Ultraperipheral Collisions (UPCs)": `
    <p>Proton-proton collisions are the most common type of collision analyzed by the CMS detector. However, experimental 
    nuclear physicists also like to study heavy-ion collisions, in which the types of particles colliding are lead ions. 
    These types of collisions are useful in understanding the behavior of nucleons (protons and neutrons) and their substructure.
    Pb ions, specifically Pb-208 ions, are used because they have a "doubly magic" nucleus, meaning they are extremely stable 
    and easier to model theoretically.</p> 
    <figure style="text-align: center;">
      <img src="Images/upc_cartoon.png" alt="UPC cartoon" style="display: block; margin: auto; max-width: 60%; height: auto;">
      <figcaption>Figure 1: An ultraperipheral collision.</figcaption>
    </figure>
    <p>Ultraperipheral collisions are a type of heavy-ion collision in which the approaching ions closely pass by each 
    other instead of directly colliding (Figure 1). Technically, this means that the impact parameter between the two ions is greater than
    twice the nuclear radius.</p>
    <figure style="text-align: center;">
      <img src="Images/jackson_field_lines.png" alt="jackson_field_lines" style="display: block; margin: auto; max-width: 60%; height: auto;">
      <figcaption>Figure 2: Electric field lines for a stationary (left) and moving (right) charged particle (<cite>Classical 
      Electrodynamics by Jackson</cite>).</figcaption>
    </figure>
    <p>At the LHC, the Pb ions in UPCs are traveling very close to the speed of light. This means relativistic effects, such as
    Lorentz contraction, become important. As the Pb ions travel closer and closer to the speed of light, the nuclei become squished
    into a kind of pancake shape. The electric field lines of the nuclei undergo a similar effect and become compressed together 
    (Figure 2). Since electric fields are made up of photons, these conditions provide a linearly polarized source of photons. 
    Photons from one of the Pb ions can interact with and probe the opposite going Pb ion. In this way experimental nuclear
    physicists can investigate the inner structure of protons and neutrons.</p>
  `,

  "Compact Muon Solenoid (CMS) Detector": `
    <div>
    <img src="Images/cms_detector.png" alt="CMS detector" style="display: block; margin: auto; max-width: 95%; height: auto;">
    <p class="note">Image courtesy of the CMS Collaboration, CERN. Source: https://cms.cern/detector</p>
  </div>
   <p>CMS is one of several detectors located around the ring of the Large Hadron Collider. It acts as a sort of camera, taking
   pictures of high energy particle collisions and helping physicists understand more about elementary particles and the forces
   that govern their interactions. This detector provided the data I analyzed throughout my PhD program.</p>
   `
};
