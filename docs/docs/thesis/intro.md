# Intro

## Topic
Development of tools for digital circuit design at the register-transfer level

### Topic summary
A high-level framework for electronic design in the ecosystem of a popular language (python) with all the bonuses that come from this ecosystem. The framework will support testing programs at high-level, encapsulating shared code into reusable modules, as well as converting high-level code to Verilog for further use on real hardware

### Goals
Framework should:
- Be simple and intuitive
- Allow easy distribution of reusable modules
- Not isolate the ecosystem by supporting conversion (translation) to Verilog
- Provide advanced parametrization for the translation process
- Reduce the "cost of error" by creating tools for unit and partial integration testing before conversion
- Support decent expandability
- Have high-quality documentation

### Viability and relevance
The current electronics design ecosystem has a fairly significant barrier to entry due to the large differences in principles and approaches compared to high-level programming. In addition to that, it is quite difficult to fully learn this discipline on your own, since practice involves the use of specialized tools and complex processes for testing and debugging

These problems are exactly the ones this framework aims to solve by becoming the first step to learning electronic design with practicing. Moreover, developing with this framework should develop skills, which won't be useless or temporary — this project will be the first step to learning more common and complex tools in electronic design, as well as an independent entity for even greater automation in electronic design
