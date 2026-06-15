

# Release Notes for
# <mark>FreeRTOS SW Pack</mark>


# Purpose

STM32Cube enables developers to achieve design success. With a comprehensive suite of professional development tools and embedded software components,
STM32Cube allows developers to differentiate products, streamline design cycles, and reduce costs. STM32Cube ecosystem supports all design steps, including selection, configuration, development, debugging, programming, and monitoring.
The STM32Cube embedded software offer provides ready-to-use software components that can be added to a project.
It includes STM32 peripheral driver APIs with two levels of abstraction, middleware, board drivers, and examples.
There are several distribution channels, including the STM32CubeMX2 tool, the ST website, and GitHub.
All embedded software comes with enhanced online documentation, with flowcharts and user sequences.

**FreeRTOS** is a real time operation system class on top of which embedded applications can be built. It is designed for microcontrollers and small microprocessors.
This MW is full-featured and highly configurable via configuration flags. **FreeRTOS** is hardware agnostic and is deployed across all STM32 series.


More documentation is available at [FreeRTOS SW Pack online documentation](https://dev.st.com/stm32cube-docs/mw-freertos/latest/en/index.html).

# Update History
<label for="collapse-section-2.1.0" aria-hidden="true">__2.1.0 / 05-June-2026__</label>
<div>

## Main changes

Release of FreeRTOS SW Pack update: 

- Bug fixing 
- Miscellaneous update of .config files.

This pack is based on FreeRTOS-Kernel [V11.2.0 version](https://github.com/FreeRTOS/FreeRTOS-Kernel/releases/tag/V11.2.0)


## Contents

- FreeRTOS real time kernel and micorocontrollers and/or compiler specific files


## Known Limitations

- MPU feature with FreeRTOS is not yet supported.


## Development toolchains and compilers

- IAR Embedded Workbench for ARM (EWARM) toolchain V9.60.3 + ST-LINK
- MDK-ARM Keil uVision V5.42
- STM32CubeIDE for Visual Studio Code (GCC13 compiler)
- STM32CubeMX2 V1.0.1


## Supported devices and boards

- STM32C5 series


## Backward compatibility
- None


## Dependencies

- STM32C5xx HAL Drivers V2.0.0

</div>


<label for="collapse-section-2.0.0" aria-hidden="true">__2.0.0 / 13-March-2026__</label>
<div>

## Main changes

First Official release of FreeRTOS SW Pack.

This pack is based on FreeRTOS-Kernel [V11.2.0 version](https://github.com/FreeRTOS/FreeRTOS-Kernel/releases/tag/V11.2.0)


## Contents

- FreeRTOS real time kernel and micorocontrollers and/or compiler specific files


## Known Limitations

- None


## Development toolchains and compilers

- IAR Embedded Workbench for ARM (EWARM) toolchain V9.60.3 + ST-LINK
- MDK-ARM Keil uVision V5.42
- STM32CubeIDE for Visual Studio Code (GCC13 compiler)
- STM32CubeMX2 V1.0.0


## Supported devices and boards

- STM32C5 series


## Backward compatibility
- None


## Dependencies

- STM32C5xx HAL Drivers V2.0.0


</div>






For complete documentation on STM32 Microcontrollers </mark> ,
visit: http://www.st.com/stm32

This release note uses up to date web standards and, for this reason, should not
be opened with Internet Explorer but preferably with popular browsers such as
Google Chrome, Mozilla Firefox, Opera or Microsoft Edge.