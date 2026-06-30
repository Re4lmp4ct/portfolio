---
date: "2020-01-30"
draft: false
title: "Strings Of Fate"
summary: "A third-person action game that allows players to use two characters in fast-paced, positioning-focused combat."
videos:
    - "2-smDiS1YTc"
    - "EUZbhcYPtiE"
details:
  - name: "School"
    value: "Digipen Institute of Technology Singapore"
  - name: "Role"
    value: "Graphics Programmer"
  - name: "Game Engine"
    value: "Custom C++ Engine"
  - name: "Genre"
    value: "Action"
gameUrl: "https://games.digipen.edu/games/strings-of-fate"
contributions:
  - title: "Graphics Programming"
    content:
      - type: "paragraph"
        paragraphs:
          - |
            As mentioned, the graphics layer was implemented using Vulkan which I found technically quite challenging to
            understand. There are still many aspects of it that I still have yet to fully grasp. As Vulkan is a low level
            graphics API, the user has to implement many of the basic functionalities that might already be available
            in OpenGL. However, this allowed me to learn about why certain industry practices work.
          - |
            For example, why use texture atlas over individual textures? When using OpenGL, it was clear that switching texture
            is slow, so we ended up using texture atlases and batching sprites. But why is it so slow? We are just switching
            a single texture!
      - type: "ordered"
        introduction: "In Vulkan, switching texture is not trivial, there are multiple steps that must be explicitly performed:"
        items:
          - |
            Allocate memory for an image object to hold the texture data. This is where the GPU will store the data in.
          - |
            Load the pixels data of the texture. This is currently on the CPU.
          - |
            Allocate memory for a staging buffer to temporary hold the pixel data until it is copied to the image object.
            We need this as we cannot write data from the CPU to GPU directly.
          - |
            Most likely, the texture is compressed to save on memory usage. However, this often makes it slower to
            transfer it from the CPU to the GPU. Hence, we will perform a layout transition to one that is optimal for
            transfer.
          - |
            Now we will copy the data from the CPU to the GPU.
          - |
            However, the layout that is optimal for transfer is not optimal for the GPU to read. So we will do another
            layout transition for optimal performance.
          - |
            But wait, most of the code needs to be ran on the GPU so we need a way to pass our instructions to it, this
            is called a command buffer. Hence, we need to allocate memory for it.
          - |
            Now we can record the earlier steps as commands in the command buffer.
          - |
            Finally, we can queue up the command buffer to be submitted to the GPU.
      - type: "paragraph"
        paragraphs:
          - |
            That is a lot of steps just for a single texture change! Now you can see why a texture change is slow. It
            was situations like this that helped me to gain understanding of how the graphics pipeline work.
          - |
            Another advantage of having to manually perform every step is that it is easier to fine tune any process to
            improve performance. Our game, despite not having any optimization at a point, was still running better than
            other students' games who had implement some. Our game was more resource intensive too.
---
Playing around with OpenGL in Save Our World, my previous game project, was enjoyable and I wanted to try implementing 
Vulkan in the next project. However, I knew that Vulkan was significantly more complex than OpenGL and hence, I was not sure
if I could juggle it with other duties. I decided to take up the role of a graphics programmer instead of technical lead.

For this project, I have a video about the contributions I made, so I am not going to put much under key contributions.