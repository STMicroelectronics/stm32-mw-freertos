# origin-pack: STMicroelectronics::freertos@2.0.0
# file-format: 1.0.0
project(STMicroelectronics_freertos_2_0_0)
cmake_minimum_required(VERSION 3.20)
add_library(STMicroelectronics_freertos_2_0_0 INTERFACE)

# List of all CMSIS properties that influence conditions for this package
if(NOT DEFINED CMSIS_Dcore)
  set(CMSIS_Dcore "CMSIS_Dcore not set")
  message(DEBUG "CMSIS_Dcore is not set to any value")
endif()

if(NOT DEFINED CMSIS_Dname)
  set(CMSIS_Dname "CMSIS_Dname not set")
  message(DEBUG "CMSIS_Dname is not set to any value")
endif()

if(NOT DEFINED CMSIS_Dsecure)
  set(CMSIS_Dsecure "CMSIS_Dsecure not set")
  message(DEBUG "CMSIS_Dsecure is not set to any value")
endif()

if(NOT DEFINED CMSIS_Dvendor)
  set(CMSIS_Dvendor "CMSIS_Dvendor not set")
  message(DEBUG "CMSIS_Dvendor is not set to any value")
endif()

if(NOT DEFINED CMSIS_Tcompiler)
  set(CMSIS_Tcompiler "CMSIS_Tcompiler not set")
  message(DEBUG "CMSIS_Tcompiler is not set to any value")
endif()


# Device specific defined symbols








# Enable all components in this package
if(CMSIS_ENTIRE_STMicroelectronics_freertos_2_0_0)
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:RTOS#Cgroup:FreeRTOS#Csub:Core#Cversion:11.2.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:RTOS#Cgroup:FreeRTOS#Csub:Stream Buffer#Cversion:11.2.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:RTOS#Cgroup:FreeRTOS#Csub:MemMang#Cvariant:Heap_1#Cversion:11.2.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:RTOS#Cgroup:FreeRTOS#Csub:MemMang#Cvariant:Heap_2#Cversion:11.2.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:RTOS#Cgroup:FreeRTOS#Csub:MemMang#Cvariant:Heap_3#Cversion:11.2.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:RTOS#Cgroup:FreeRTOS#Csub:MemMang#Cvariant:Heap_4#Cversion:11.2.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:RTOS#Cgroup:FreeRTOS#Csub:MemMang#Cvariant:Heap_5#Cversion:11.2.0")
endif()

# All conditions used by this package

# condition: STMicroelectronics.freertos.2.0.0
# description: 
if((CMSIS_Dname MATCHES "STM32.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13"))
  set(STMicroelectronics.freertos.2.0.0 "1")
  message(DEBUG "CMSIS condition STMicroelectronics.freertos.2.0.0 enabled")
else()
  set(STMicroelectronics.freertos.2.0.0 0)
endif()


# condition: STMicroelectronics.freertos.2.0.0:CM0 GCC Condition
# description: Cortex M0 / GCC compiler
if((CMSIS_Dcore STREQUAL "Cortex-M0+" AND (CMSIS_Tcompiler STREQUAL "GCC" OR CMSIS_Tcompiler STREQUAL "ARMCC")))
  set(STMicroelectronics.freertos.2.0.0_CM0_GCC_Condition "1")
  message(DEBUG "CMSIS condition STMicroelectronics.freertos.2.0.0_CM0_GCC_Condition enabled")
else()
  set(STMicroelectronics.freertos.2.0.0_CM0_GCC_Condition 0)
endif()


# condition: STMicroelectronics.freertos.2.0.0:CM0 IAR Condition
# description: Cortex M0 / IAR compiler
if((CMSIS_Dcore STREQUAL "Cortex-M0+" AND CMSIS_Tcompiler STREQUAL "IAR"))
  set(STMicroelectronics.freertos.2.0.0_CM0_IAR_Condition "1")
  message(DEBUG "CMSIS condition STMicroelectronics.freertos.2.0.0_CM0_IAR_Condition enabled")
else()
  set(STMicroelectronics.freertos.2.0.0_CM0_IAR_Condition 0)
endif()


# condition: STMicroelectronics.freertos.2.0.0:CM33 TZ Disabled GCC Condition
# description: Cortex M33 TZ Disabled / GCC compiler
if((CMSIS_Dcore STREQUAL "Cortex-M33" AND CMSIS_Dsecure STREQUAL "TZ-disabled" AND (CMSIS_Tcompiler STREQUAL "GCC" OR CMSIS_Tcompiler STREQUAL "ARMCC")))
  set(STMicroelectronics.freertos.2.0.0_CM33_TZ_Disabled_GCC_Condition "1")
  message(DEBUG "CMSIS condition STMicroelectronics.freertos.2.0.0_CM33_TZ_Disabled_GCC_Condition enabled")
else()
  set(STMicroelectronics.freertos.2.0.0_CM33_TZ_Disabled_GCC_Condition 0)
endif()


# condition: STMicroelectronics.freertos.2.0.0:CM33 TZ Disabled IAR Condition
# description: Cortex M33 TZ Disabled / IAR compiler
if((CMSIS_Dcore STREQUAL "Cortex-M33" AND CMSIS_Dsecure STREQUAL "TZ-disabled" AND CMSIS_Tcompiler STREQUAL "IAR"))
  set(STMicroelectronics.freertos.2.0.0_CM33_TZ_Disabled_IAR_Condition "1")
  message(DEBUG "CMSIS condition STMicroelectronics.freertos.2.0.0_CM33_TZ_Disabled_IAR_Condition enabled")
else()
  set(STMicroelectronics.freertos.2.0.0_CM33_TZ_Disabled_IAR_Condition 0)
endif()


# condition: STMicroelectronics.freertos.2.0.0:CM7 CM4 GCC Condition
# description: Cortex M7 / GCC compiler
if(((CMSIS_Dcore STREQUAL "Cortex-M7" OR CMSIS_Dcore STREQUAL "Cortex-M4") AND 
   (CMSIS_Tcompiler STREQUAL "GCC" OR CMSIS_Tcompiler STREQUAL "ARMCC")))
  set(STMicroelectronics.freertos.2.0.0_CM7_CM4_GCC_Condition "1")
  message(DEBUG "CMSIS condition STMicroelectronics.freertos.2.0.0_CM7_CM4_GCC_Condition enabled")
else()
  set(STMicroelectronics.freertos.2.0.0_CM7_CM4_GCC_Condition 0)
endif()


# condition: STMicroelectronics.freertos.2.0.0:CM7 CM4 IAR Condition
# description: Cortex M7 (newer than r0p1) and CM4 / IAR compiler
if(((CMSIS_Dcore STREQUAL "Cortex-M7" OR CMSIS_Dcore STREQUAL "Cortex-M4") AND 
   CMSIS_Tcompiler STREQUAL "IAR"))
  set(STMicroelectronics.freertos.2.0.0_CM7_CM4_IAR_Condition "1")
  message(DEBUG "CMSIS condition STMicroelectronics.freertos.2.0.0_CM7_CM4_IAR_Condition enabled")
else()
  set(STMicroelectronics.freertos.2.0.0_CM7_CM4_IAR_Condition 0)
endif()


# condition: STMicroelectronics.freertos.2.0.0:CM85 GCC Condition
# description: Cortex M85 / GCC compiler
if(((CMSIS_Dsecure STREQUAL "Secure" OR CMSIS_Dsecure STREQUAL "Secure-only") AND 
   (CMSIS_Dcore STREQUAL "Cortex-M85" AND (CMSIS_Tcompiler STREQUAL "GCC" OR CMSIS_Tcompiler STREQUAL "ARMCC"))))
  set(STMicroelectronics.freertos.2.0.0_CM85_GCC_Condition "1")
  message(DEBUG "CMSIS condition STMicroelectronics.freertos.2.0.0_CM85_GCC_Condition enabled")
else()
  set(STMicroelectronics.freertos.2.0.0_CM85_GCC_Condition 0)
endif()


# condition: STMicroelectronics.freertos.2.0.0:CM85 IAR Condition
# description: Cortex M85 / IAR compiler
if(((CMSIS_Dsecure STREQUAL "Secure" OR CMSIS_Dsecure STREQUAL "Secure-only") AND 
   (CMSIS_Dcore STREQUAL "Cortex-M85" AND CMSIS_Tcompiler STREQUAL "IAR")))
  set(STMicroelectronics.freertos.2.0.0_CM85_IAR_Condition "1")
  message(DEBUG "CMSIS condition STMicroelectronics.freertos.2.0.0_CM85_IAR_Condition enabled")
else()
  set(STMicroelectronics.freertos.2.0.0_CM85_IAR_Condition 0)
endif()


# condition: STMicroelectronics.freertos.2.0.0:FreeRTOS Init condition
# description: STMicroelectronics FreeRTOS Init
set(STMicroelectronics.freertos.2.0.0_FreeRTOS_Init_condition "$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:RTOS#.*Cgroup:FreeRTOS#.*Csub:Core(#.*|$)>,>>")
message(DEBUG "CMSIS condition STMicroelectronics.freertos.2.0.0_FreeRTOS_Init_condition enabled")


# condition: STMicroelectronics.freertos.2.0.0:FreeRTOS Memory Heap condition
# description:  Memory Heap condition 
set(STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition "1")
message(DEBUG "CMSIS condition STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition enabled")


# condition: STMicroelectronics.freertos.2.0.0:GCC Compiler Condition
# description: Combined condition to check for GCC and AC6 compilers
if((CMSIS_Tcompiler STREQUAL "GCC" OR CMSIS_Tcompiler STREQUAL "ARMCC"))
  set(STMicroelectronics.freertos.2.0.0_GCC_Compiler_Condition "1")
  message(DEBUG "CMSIS condition STMicroelectronics.freertos.2.0.0_GCC_Compiler_Condition enabled")
else()
  set(STMicroelectronics.freertos.2.0.0_GCC_Compiler_Condition 0)
endif()


# condition: STMicroelectronics.freertos.2.0.0:Stream Buffers condition
# description: Stream Buffers condition
set(STMicroelectronics.freertos.2.0.0_Stream_Buffers_condition "1")
message(DEBUG "CMSIS condition STMicroelectronics.freertos.2.0.0_Stream_Buffers_condition enabled")

# Files and components in this package
if("Cvendor:STMicroelectronics#Cclass:RTOS#Cgroup:FreeRTOS#Csub:Core#Cversion:11.2.0" IN_LIST CMSIS_COMPONENTS_LIST)  # FreeRTOS Core component 
  message(DEBUG "Using component RTOS_FreeRTOS_Core_11_2_0")
  target_compile_definitions(STMicroelectronics_freertos_2_0_0 INTERFACE "$<${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition}:-DCMSIS_USE_RTOS_FreeRTOS_Core_11_2_0=1>")
  target_include_directories(STMicroelectronics_freertos_2_0_0 INTERFACE "$<${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition}:${CMAKE_CURRENT_LIST_DIR}/include>")
  target_include_directories(STMicroelectronics_freertos_2_0_0 INTERFACE "$<${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition}:${CMAKE_CURRENT_LIST_DIR}/include/>")
  target_sources(STMicroelectronics_freertos_2_0_0 INTERFACE "$<${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition}:${CMAKE_CURRENT_LIST_DIR}/croutine.c>")
  target_sources(STMicroelectronics_freertos_2_0_0 INTERFACE "$<${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition}:${CMAKE_CURRENT_LIST_DIR}/event_groups.c>")
  target_sources(STMicroelectronics_freertos_2_0_0 INTERFACE "$<${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition}:${CMAKE_CURRENT_LIST_DIR}/list.c>")
  target_sources(STMicroelectronics_freertos_2_0_0 INTERFACE "$<${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition}:${CMAKE_CURRENT_LIST_DIR}/queue.c>")
  target_sources(STMicroelectronics_freertos_2_0_0 INTERFACE "$<${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition}:${CMAKE_CURRENT_LIST_DIR}/tasks.c>")
  target_sources(STMicroelectronics_freertos_2_0_0 INTERFACE "$<${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition}:${CMAKE_CURRENT_LIST_DIR}/timers.c>")
  target_include_directories(STMicroelectronics_freertos_2_0_0 INTERFACE "$<$<AND:${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition},${STMicroelectronics.freertos.2.0.0_CM0_GCC_Condition}>:${CMAKE_CURRENT_LIST_DIR}/portable/GCC/ARM_CM0>")
  target_include_directories(STMicroelectronics_freertos_2_0_0 INTERFACE "$<$<AND:${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition},${STMicroelectronics.freertos.2.0.0_CM0_GCC_Condition}>:${CMAKE_CURRENT_LIST_DIR}/portable/GCC/ARM_CM0/>")
  target_sources(STMicroelectronics_freertos_2_0_0 INTERFACE "$<$<AND:${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition},${STMicroelectronics.freertos.2.0.0_CM0_GCC_Condition}>:${CMAKE_CURRENT_LIST_DIR}/portable/GCC/ARM_CM0/mpu_wrappers_v2_asm.c>")
  target_sources(STMicroelectronics_freertos_2_0_0 INTERFACE "$<$<AND:${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition},${STMicroelectronics.freertos.2.0.0_CM0_GCC_Condition}>:${CMAKE_CURRENT_LIST_DIR}/portable/GCC/ARM_CM0/port.c>")
  target_sources(STMicroelectronics_freertos_2_0_0 INTERFACE "$<$<AND:${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition},${STMicroelectronics.freertos.2.0.0_CM0_GCC_Condition}>:${CMAKE_CURRENT_LIST_DIR}/portable/GCC/ARM_CM0/portasm.c>")
  target_include_directories(STMicroelectronics_freertos_2_0_0 INTERFACE "$<$<AND:${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition},${STMicroelectronics.freertos.2.0.0_CM0_IAR_Condition}>:${CMAKE_CURRENT_LIST_DIR}/portable/IAR/ARM_CM0>")
  target_include_directories(STMicroelectronics_freertos_2_0_0 INTERFACE "$<$<AND:${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition},${STMicroelectronics.freertos.2.0.0_CM0_IAR_Condition}>:${CMAKE_CURRENT_LIST_DIR}/portable/IAR/ARM_CM0/>")
  target_sources(STMicroelectronics_freertos_2_0_0 INTERFACE "$<$<AND:${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition},${STMicroelectronics.freertos.2.0.0_CM0_IAR_Condition}>:${CMAKE_CURRENT_LIST_DIR}/portable/IAR/ARM_CM0/port.c>")
  target_sources(STMicroelectronics_freertos_2_0_0 INTERFACE "$<$<AND:${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition},${STMicroelectronics.freertos.2.0.0_CM0_IAR_Condition}>:${CMAKE_CURRENT_LIST_DIR}/portable/IAR/ARM_CM0/portasm.s>")
  target_include_directories(STMicroelectronics_freertos_2_0_0 INTERFACE "$<$<AND:${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition},${STMicroelectronics.freertos.2.0.0_CM33_TZ_Disabled_GCC_Condition}>:${CMAKE_CURRENT_LIST_DIR}/portable/GCC/ARM_CM33_NTZ/non_secure>")
  target_include_directories(STMicroelectronics_freertos_2_0_0 INTERFACE "$<$<AND:${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition},${STMicroelectronics.freertos.2.0.0_CM33_TZ_Disabled_GCC_Condition}>:${CMAKE_CURRENT_LIST_DIR}/portable/GCC/ARM_CM33_NTZ/non_secure/>")
  target_sources(STMicroelectronics_freertos_2_0_0 INTERFACE "$<$<AND:${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition},${STMicroelectronics.freertos.2.0.0_CM33_TZ_Disabled_GCC_Condition}>:${CMAKE_CURRENT_LIST_DIR}/portable/GCC/ARM_CM33_NTZ/non_secure/mpu_wrappers_v2_asm.c>")
  target_sources(STMicroelectronics_freertos_2_0_0 INTERFACE "$<$<AND:${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition},${STMicroelectronics.freertos.2.0.0_CM33_TZ_Disabled_GCC_Condition}>:${CMAKE_CURRENT_LIST_DIR}/portable/GCC/ARM_CM33_NTZ/non_secure/port.c>")
  target_sources(STMicroelectronics_freertos_2_0_0 INTERFACE "$<$<AND:${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition},${STMicroelectronics.freertos.2.0.0_CM33_TZ_Disabled_GCC_Condition}>:${CMAKE_CURRENT_LIST_DIR}/portable/GCC/ARM_CM33_NTZ/non_secure/portasm.c>")
  target_include_directories(STMicroelectronics_freertos_2_0_0 INTERFACE "$<$<AND:${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition},${STMicroelectronics.freertos.2.0.0_CM33_TZ_Disabled_IAR_Condition}>:${CMAKE_CURRENT_LIST_DIR}/portable/IAR/ARM_CM33_NTZ/non_secure>")
  target_include_directories(STMicroelectronics_freertos_2_0_0 INTERFACE "$<$<AND:${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition},${STMicroelectronics.freertos.2.0.0_CM33_TZ_Disabled_IAR_Condition}>:${CMAKE_CURRENT_LIST_DIR}/portable/IAR/ARM_CM33_NTZ/non_secure/>")
  target_sources(STMicroelectronics_freertos_2_0_0 INTERFACE "$<$<AND:${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition},${STMicroelectronics.freertos.2.0.0_CM33_TZ_Disabled_IAR_Condition}>:${CMAKE_CURRENT_LIST_DIR}/portable/IAR/ARM_CM33_NTZ/non_secure/port.c>")
  target_sources(STMicroelectronics_freertos_2_0_0 INTERFACE "$<$<AND:${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition},${STMicroelectronics.freertos.2.0.0_CM33_TZ_Disabled_IAR_Condition}>:${CMAKE_CURRENT_LIST_DIR}/portable/IAR/ARM_CM33_NTZ/non_secure/portasm.s>")
  target_sources(STMicroelectronics_freertos_2_0_0 INTERFACE "$<$<AND:${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition},${STMicroelectronics.freertos.2.0.0_CM33_TZ_Disabled_IAR_Condition}>:${CMAKE_CURRENT_LIST_DIR}/portable/IAR/ARM_CM33_NTZ/non_secure/mpu_wrappers_v2_asm.S>")
  target_include_directories(STMicroelectronics_freertos_2_0_0 INTERFACE "$<$<AND:${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition},${STMicroelectronics.freertos.2.0.0_CM7_CM4_GCC_Condition}>:${CMAKE_CURRENT_LIST_DIR}/portable/GCC/ARM_CM4F>")
  target_include_directories(STMicroelectronics_freertos_2_0_0 INTERFACE "$<$<AND:${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition},${STMicroelectronics.freertos.2.0.0_CM7_CM4_GCC_Condition}>:${CMAKE_CURRENT_LIST_DIR}/portable/GCC/ARM_CM4F/>")
  target_sources(STMicroelectronics_freertos_2_0_0 INTERFACE "$<$<AND:${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition},${STMicroelectronics.freertos.2.0.0_CM7_CM4_GCC_Condition}>:${CMAKE_CURRENT_LIST_DIR}/portable/GCC/ARM_CM4F/port.c>")
  target_include_directories(STMicroelectronics_freertos_2_0_0 INTERFACE "$<$<AND:${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition},${STMicroelectronics.freertos.2.0.0_CM7_CM4_IAR_Condition}>:${CMAKE_CURRENT_LIST_DIR}/portable/IAR/ARM_CM4F>")
  target_include_directories(STMicroelectronics_freertos_2_0_0 INTERFACE "$<$<AND:${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition},${STMicroelectronics.freertos.2.0.0_CM7_CM4_IAR_Condition}>:${CMAKE_CURRENT_LIST_DIR}/portable/IAR/ARM_CM4F/>")
  target_sources(STMicroelectronics_freertos_2_0_0 INTERFACE "$<$<AND:${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition},${STMicroelectronics.freertos.2.0.0_CM7_CM4_IAR_Condition}>:${CMAKE_CURRENT_LIST_DIR}/portable/IAR/ARM_CM4F/port.c>")
  target_sources(STMicroelectronics_freertos_2_0_0 INTERFACE "$<$<AND:${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition},${STMicroelectronics.freertos.2.0.0_CM7_CM4_IAR_Condition}>:${CMAKE_CURRENT_LIST_DIR}/portable/IAR/ARM_CM4F/portasm.s>")
  target_include_directories(STMicroelectronics_freertos_2_0_0 INTERFACE "$<$<AND:${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition},${STMicroelectronics.freertos.2.0.0_CM85_GCC_Condition}>:${CMAKE_CURRENT_LIST_DIR}/portable/GCC/ARM_CM85_NTZ/non_secure>")
  target_include_directories(STMicroelectronics_freertos_2_0_0 INTERFACE "$<$<AND:${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition},${STMicroelectronics.freertos.2.0.0_CM85_GCC_Condition}>:${CMAKE_CURRENT_LIST_DIR}/portable/GCC/ARM_CM85_NTZ/non_secure/>")
  target_sources(STMicroelectronics_freertos_2_0_0 INTERFACE "$<$<AND:${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition},${STMicroelectronics.freertos.2.0.0_CM85_GCC_Condition}>:${CMAKE_CURRENT_LIST_DIR}/portable/GCC/ARM_CM85_NTZ/non_secure/mpu_wrappers_v2_asm.c>")
  target_sources(STMicroelectronics_freertos_2_0_0 INTERFACE "$<$<AND:${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition},${STMicroelectronics.freertos.2.0.0_CM85_GCC_Condition}>:${CMAKE_CURRENT_LIST_DIR}/portable/GCC/ARM_CM85_NTZ/non_secure/port.c>")
  target_sources(STMicroelectronics_freertos_2_0_0 INTERFACE "$<$<AND:${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition},${STMicroelectronics.freertos.2.0.0_CM85_GCC_Condition}>:${CMAKE_CURRENT_LIST_DIR}/portable/GCC/ARM_CM85_NTZ/non_secure/portasm.c>")
  target_include_directories(STMicroelectronics_freertos_2_0_0 INTERFACE "$<$<AND:${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition},${STMicroelectronics.freertos.2.0.0_CM85_IAR_Condition}>:${CMAKE_CURRENT_LIST_DIR}/portable/IAR/ARM_CM85_NTZ/non_secure>")
  target_include_directories(STMicroelectronics_freertos_2_0_0 INTERFACE "$<$<AND:${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition},${STMicroelectronics.freertos.2.0.0_CM85_IAR_Condition}>:${CMAKE_CURRENT_LIST_DIR}/portable/IAR/ARM_CM85_NTZ/non_secure/>")
  target_sources(STMicroelectronics_freertos_2_0_0 INTERFACE "$<$<AND:${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition},${STMicroelectronics.freertos.2.0.0_CM85_IAR_Condition}>:${CMAKE_CURRENT_LIST_DIR}/portable/IAR/ARM_CM85_NTZ/non_secure/port.c>")
  target_sources(STMicroelectronics_freertos_2_0_0 INTERFACE "$<$<AND:${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition},${STMicroelectronics.freertos.2.0.0_CM85_IAR_Condition}>:${CMAKE_CURRENT_LIST_DIR}/portable/IAR/ARM_CM85_NTZ/non_secure/mpu_wrappers_v2_asm.S>")
  target_sources(STMicroelectronics_freertos_2_0_0 INTERFACE "$<$<AND:${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition},${STMicroelectronics.freertos.2.0.0_CM85_IAR_Condition}>:${CMAKE_CURRENT_LIST_DIR}/portable/IAR/ARM_CM85_NTZ/non_secure/portasm.s>")
endif()

if("Cvendor:STMicroelectronics#Cclass:RTOS#Cgroup:FreeRTOS#Csub:Stream Buffer#Cversion:11.2.0" IN_LIST CMSIS_COMPONENTS_LIST)  # FreeRTOS Stream Buffer component 
  message(DEBUG "Using component RTOS_FreeRTOS_Stream_Buffer_11_2_0")
  target_compile_definitions(STMicroelectronics_freertos_2_0_0 INTERFACE "$<${STMicroelectronics.freertos.2.0.0_Stream_Buffers_condition}:-DCMSIS_USE_RTOS_FreeRTOS_Stream_Buffer_11_2_0=1>")
  target_include_directories(STMicroelectronics_freertos_2_0_0 INTERFACE "$<${STMicroelectronics.freertos.2.0.0_Stream_Buffers_condition}:${CMAKE_CURRENT_LIST_DIR}/include/>")
  target_sources(STMicroelectronics_freertos_2_0_0 INTERFACE "$<${STMicroelectronics.freertos.2.0.0_Stream_Buffers_condition}:${CMAKE_CURRENT_LIST_DIR}/stream_buffer.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:RTOS#Cgroup:FreeRTOS#Csub:MemMang#Cvariant:Heap_1#Cversion:11.2.0" IN_LIST CMSIS_COMPONENTS_LIST)  # FreeRTOS  Memory Heap (Heap 1) component 
  message(DEBUG "Using component RTOS_FreeRTOS_MemMang_Heap_1_11_2_0")
  target_compile_definitions(STMicroelectronics_freertos_2_0_0 INTERFACE "$<${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition}:-DCMSIS_USE_RTOS_FreeRTOS_MemMang_Heap_1_11_2_0=1>")
  target_include_directories(STMicroelectronics_freertos_2_0_0 INTERFACE "$<${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition}:${CMAKE_CURRENT_LIST_DIR}/include/>")
  target_sources(STMicroelectronics_freertos_2_0_0 INTERFACE "$<${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition}:${CMAKE_CURRENT_LIST_DIR}/portable/MemMang/heap_1.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:RTOS#Cgroup:FreeRTOS#Csub:MemMang#Cvariant:Heap_2#Cversion:11.2.0" IN_LIST CMSIS_COMPONENTS_LIST)  # FreeRTOS  Memory Heap (Heap 2) component 
  message(DEBUG "Using component RTOS_FreeRTOS_MemMang_Heap_2_11_2_0")
  target_compile_definitions(STMicroelectronics_freertos_2_0_0 INTERFACE "$<${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition}:-DCMSIS_USE_RTOS_FreeRTOS_MemMang_Heap_2_11_2_0=1>")
  target_include_directories(STMicroelectronics_freertos_2_0_0 INTERFACE "$<${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition}:${CMAKE_CURRENT_LIST_DIR}/include/>")
  target_sources(STMicroelectronics_freertos_2_0_0 INTERFACE "$<${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition}:${CMAKE_CURRENT_LIST_DIR}/portable/MemMang/heap_2.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:RTOS#Cgroup:FreeRTOS#Csub:MemMang#Cvariant:Heap_3#Cversion:11.2.0" IN_LIST CMSIS_COMPONENTS_LIST)  # FreeRTOS  Memory Heap (Heap 3) component 
  message(DEBUG "Using component RTOS_FreeRTOS_MemMang_Heap_3_11_2_0")
  target_compile_definitions(STMicroelectronics_freertos_2_0_0 INTERFACE "$<${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition}:-DCMSIS_USE_RTOS_FreeRTOS_MemMang_Heap_3_11_2_0=1>")
  target_include_directories(STMicroelectronics_freertos_2_0_0 INTERFACE "$<${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition}:${CMAKE_CURRENT_LIST_DIR}/include/>")
  target_sources(STMicroelectronics_freertos_2_0_0 INTERFACE "$<${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition}:${CMAKE_CURRENT_LIST_DIR}/portable/MemMang/heap_3.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:RTOS#Cgroup:FreeRTOS#Csub:MemMang#Cvariant:Heap_4#Cversion:11.2.0" IN_LIST CMSIS_COMPONENTS_LIST)  # FreeRTOS  Memory Heap (Heap 4) component 
  message(DEBUG "Using component RTOS_FreeRTOS_MemMang_Heap_4_11_2_0")
  target_compile_definitions(STMicroelectronics_freertos_2_0_0 INTERFACE "$<${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition}:-DCMSIS_USE_RTOS_FreeRTOS_MemMang_Heap_4_11_2_0=1>")
  target_include_directories(STMicroelectronics_freertos_2_0_0 INTERFACE "$<${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition}:${CMAKE_CURRENT_LIST_DIR}/include/>")
  target_sources(STMicroelectronics_freertos_2_0_0 INTERFACE "$<${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition}:${CMAKE_CURRENT_LIST_DIR}/portable/MemMang/heap_4.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:RTOS#Cgroup:FreeRTOS#Csub:MemMang#Cvariant:Heap_5#Cversion:11.2.0" IN_LIST CMSIS_COMPONENTS_LIST)  # FreeRTOS  Memory Heap (Heap 5) component 
  message(DEBUG "Using component RTOS_FreeRTOS_MemMang_Heap_5_11_2_0")
  target_compile_definitions(STMicroelectronics_freertos_2_0_0 INTERFACE "$<${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition}:-DCMSIS_USE_RTOS_FreeRTOS_MemMang_Heap_5_11_2_0=1>")
  target_include_directories(STMicroelectronics_freertos_2_0_0 INTERFACE "$<${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition}:${CMAKE_CURRENT_LIST_DIR}/include/>")
  target_sources(STMicroelectronics_freertos_2_0_0 INTERFACE "$<${STMicroelectronics.freertos.2.0.0_FreeRTOS_Memory_Heap_condition}:${CMAKE_CURRENT_LIST_DIR}/portable/MemMang/heap_5.c>")
endif()

