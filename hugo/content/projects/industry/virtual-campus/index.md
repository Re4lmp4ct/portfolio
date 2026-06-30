---
date: "2021-01-30"
draft: false
title: "Virtual Campus"
summary: "A 3D multiplayer game to showcase SIT's future campus to students and staff."
videos: 
  - "lnvTt_aL2PQ"
details:
  - name: "Company"
    value: "Singapore Institute of Technology"
  - name: "Role"
    value: "Software Engineer"
  - name: "Game Engine"
    value: "Unity"
  - name: "Genre"
    value: "Simulation"
contributions:
  - title: "Networking Middleware"
    content:
      - type: "paragraph"
        paragraphs:
          - |
            The project originally used Photon as its networking backend due to its ease of use. However, we were forced
            to make a switch away from Photon due to administrative issues days before a live event. We ended up choosing
            to self host the game server using Mirror and AWS. Despite this, there was still hope that the administrative
            issues would be resolved before then.
          - |
            I ended up having to write a networking middleware that allowed me to write agnostic networking code that 
            internally, would use either Photon or Mirror depending on the compilation flags.
  - title: "3D Model Optimization"
    content:
      - type: "paragraph"
        paragraphs:
          - |
            The 3D model of the campus was generated from the BIM file that was used in the construction of the campus.
            As you can imagine, the generated file was very big; it had millions of vertices and hundreds of thousands of 
            objects. It was unusable. Furthermore, the stakeholders wanted it to be hosted on the web, which limited the amount of 
            computer resources. Optimization had to be made.
          - |  
            The development team consist of only a game designer and me; and his computer could not even open the file,
            so I had to be the one to do the optimization.
          - |
            At this point, performing simple actions in Blender was taking an extremely long time and I needed to find
            a way to quickly cut down the complexity of the model to speed up my work. My first optimization was to remove 
            all redundant objects.
          - |
            When converting the BIM file to FBX, extra objects were generated for each material layer; a carpeted floor
            has the concrete and carpet layer as a simple example. In our use case, we only need one layer to be visible.
            However, this was quite challenging as some objects had up to five layers and they all have generic names.
            For example, an object could easily be made up of a single layer called Precast 300mm... but in other
            objects, Precast 300mm could be one of many. Basically, I could not do a mass deletion or write a script to
            do so for me. I had to manually delete them one by one.
          - |
            The second optimization was to ignore some realistic aspects of the model. For example, in a game, the number of 
            balusters looks too much even if it is the correct number, so I can get away by removing some. I ended up
            writing a python script to help with this task. Likewise, we did not need every rounded corners to be as 
            round as their real counterparts. 
          - |
            The last optimization was to modify the topology of the model to be blockier, especially for parts that can
            only be viewed from far away.
          - |
            After everything was done, the file size of the model was cut down from +10Gb to below 50mb and even on the
            web, the entire campus could be rendered at 60fps.
---
Virtual Campus originally started out as a simple multiplayer game hosted on the web that allowed the players to walk 
around the future campus building and interact with one another. Eventually, it became a central hub for many smaller
projects.

Unfortunately, as an internal project, there is a lot that I cannot cover about this.