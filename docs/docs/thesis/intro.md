# Intro

## Topic
Developing a high-level framework for simplification and systematization of processes in electronic design

### Topic summary
A high-level framework for electronic design in the ecosystem of a popular language (python) with all the bonuses that come from this ecosystem. The framework will support testing programs at high-level, encapsulating shared code into reusable modules, as well as converting high-level code to Verilog for further use on real hardware

### Goals
The resulting framework should:
- Be simple and intuitive
- Allow easy distribution of reusable modules
- Not isolate the ecosystem by supporting conversion (translation) to Verilog
- Provide advanced parametrization for the translation process
- Reduce the "cost of error" by creating tools for unit and partial integration testing before conversion
- Support decent expandability
- Have high-quality documentation

### Viability and relevance
The current electronics design ecosystem has a fairly significant barrier to entry due to the large differences in principles and approaches compared to high-level programming. Removing this barrier with something completely new and separate won't be useful, since only a few companies will adopt and support a completely new technology stack

In believe this problem can be approached from a different direction. Developing with this framework should develop skills, which won't be useless or temporary — this project will be at first an introductory step in electronics design, and later an independent entity for greater electronic design automation 
