 [{
    id: 1,
    question: "The main characteristics of a Darlington Amplifier are______.",
    options: ["Low input impedance, low output impedance and low voltage gain.", "High input impedance, high output impedance and high current gain.", "Low input impedance, low output impedance and high current gain.", "High input impedance, low output impedance and high current gain."],
    correctAnswer: 3,
    explanation: "Darlington Amplifiers are characterized by their high input impedance (due to the cascaded transistor arrangement), low output impedance (similar to an emitter follower configuration), and very high current gain (approximately equal to the product of the individual transistor gains β₁×β₂)."
}, {
    id: 2,
    question: "What configuration is widely preferred in cascading amplifiers?",
    options: ["Common Collector", "Common Base", "Common source", "Common Emitter"],
    correctAnswer: 3,
    explanation: "Common Emitter configuration is widely preferred in cascading amplifiers due to its good voltage and current gain characteristics, moderate input and output impedances, and 180° phase shift that can be useful in multi-stage designs. It provides the best balance of gain and bandwidth for most applications."
}, {
    id: 3,
    question: "Enhancement mode MOSFETs are more commonly used as______.",
    options: ["Capacitors", "Buffers", "Resistors", "Switches"],
    correctAnswer: 3,
    explanation: "Enhancement mode MOSFETs are primarily used as switches in digital circuits because they require a gate-source voltage above the threshold to turn on (normally off), making them ideal for switching applications in digital logic, power control, and load switching circuits."
}, {
    id: 4,
    question: "Which one of the following flow chart symbol is used for decision",
    options: [e.jsx("img", {
        src: "images/questions/flowchart_diamond.png",
        alt: "Diamond shape",
        style: {
            width: "50px",
            height: "50px"
        }
    }), e.jsx("img", {
        src: "images/questions/flowchart_rectangle.png",
        alt: "Rectangle shape",
        style: {
            width: "50px",
            height: "50px"
        }
    }), e.jsx("img", {
        src: "images/questions/flowchart_oval.png",
        alt: "Oval shape",
        style: {
            width: "50px",
            height: "50px"
        }
    }), e.jsx("img", {
        src: "images/questions/flowchart_parallelogram.png",
        alt: "Parallelogram shape",
        style: {
            width: "50px",
            height: "50px"
        }
    })],
    correctAnswer: 0,
    explanation: "The diamond shape is used for decision points in flowcharts."
}, {
    id: 5,
    question: "The simplified form of Boolean expression (X+Y+XY)(X+Z) is:",
    options: ["XZ+Y", "XY+YZ", "X+Y+Z", "X+YZ"],
    correctAnswer: 3,
    explanation: "The simplified form of the Boolean expression is X+YZ."
}, {
    id: 6,
    question: "The forward characteristic of a diode has a slope of approximately 20mA/V at a desired point. The approximate incremental resistance of the diode is:",
    options: ["10 Ω", "35 Ω", "50 Ω", "20 Ω"],
    correctAnswer: 2,
    explanation: "Incremental resistance r = 1/slope = 1/(20mA/V) = 50 Ω."
}, {
    id: 7,
    question: "An n-channel D-MOSFET with a positive VGS is operating in ______.",
    options: ["the enhancement mode", "Saturation", "cutoff", "the depletion mode"],
    correctAnswer: 0,
    explanation: "With positive VGS, an n-channel D-MOSFET operates in enhancement mode."
}, {
    id: 8,
    question: "The process of emitting photons from a semi-conductive material is called ______.",
    options: ["electroluminescence", "gallium arsenide", "gallium phosphide", "photoluminescence"],
    correctAnswer: 0,
    explanation: "The process is called electroluminescence."
}, {
    id: 9,
    question: "What function does booting perform when the computer is switched on?",
    options: ["Shut-down test", "Reliability test", "Power-on-self test", "Correct functioning test"],
    correctAnswer: 2,
    explanation: "Booting performs the Power-On Self-Test (POST) when the computer starts."
}, {
    id: 10,
    question: "To measure a current out of the second resistor in a series circuit consisting of four resistors, an Ammeter can be placed.",
    options: ["At the negative terminal of the source", "Between the third and the fourth resistor", "Between the second and the third resistor", "At any point in the circuit"],
    correctAnswer: 2,
    explanation: "In series circuits, current is the same at all points, but to measure current specifically after the second resistor, it should be placed between the second and third resistor."
}, {
    id: 11,
    question: "A two-port network is defined by the relation: (I₁/I₂) = (5V₁ + 3V₂)/(2V₁ - 7V₂). The value of z₂₂ is",
    options: ["7 Ω", "2/31 Ω", "-7 Ω", "-5/41 Ω"],
    correctAnswer: 2,
    explanation: "From the given relation, z₂₂ is calculated to be -7 Ω."
}, {
    id: 12,
    question: e.jsxs("div", {
        children: ["This item is based on the following electrical circuit", e.jsx("img", {
            src: "images/questions/logic_gate_circuit.png",
            alt: "Logic gate circuit",
            style: {
                maxWidth: "300px"
            },
            onError: n => {
                const t = n.currentTarget;
                t.src.endsWith("/questions/logic_gate_circuit.png") ? t.src = "/questions/logic_gate_circuit_backup.png" : (console.error("Image failed to load from both locations"),
                t.style.display = "none")
            }
        })]
    }),
    options: ["OR Logic gate", "AND Logic gate", "NOR Logic gate", "NAND Logic gate"],
    correctAnswer: 3,
    explanation: "The circuit represents a NAND gate. This can be verified by analyzing the transistor arrangement, which implements the logical operation NOT-AND. When both inputs are high, the output is low; otherwise, the output is high, which is precisely the NAND operation."
}, {
    id: 13,
    question: "The 1's complement of (10111001)₂ is",
    options: ["(01000110)₂", "(11000110)₂", "(01000111)₂", "(1010101)₂"],
    correctAnswer: 0,
    explanation: "1's complement is obtained by flipping all bits: 10111001 → 01000110."
}, {
    id: 14,
    question: "Which of the following is true about open circuit?",
    options: ["Circuit element with resistance approaching zero", "Circuit element with current approaching infinity", "Circuit element with voltage approaching zero", "Circuit element with resistance approaching infinity"],
    correctAnswer: 3,
    explanation: "An open circuit has resistance approaching infinity."
}, {
    id: 15,
    question: "Which of the following techniques is used in determining the time domain response of a linear time invariant system?",
    options: ["Fourier Series", "Laplace transform", "Convolution Integral", "Fourier transform"],
    correctAnswer: 2,
    explanation: "Convolution Integral is used for determining time domain response."
}, {
    id: 16,
    question: "In a PNP transistor, the current carriers are ______.",
    options: ["acceptor ions", "holes", "free electrons", "donor ions"],
    correctAnswer: 1,
    explanation: "In PNP transistors, the majority current carriers are holes."
}, {
    id: 17,
    question: "The data elements in structure are also known as:",
    options: ["Objects", "Instruction", "Members", "Data"],
    correctAnswer: 2,
    explanation: "Data elements in a structure are called members."
}, {
    id: 18,
    question: "Which among the following assertions represents a necessary condition for the existence of Fourier Transform of discrete time signal (DTFT)?",
    options: ["Discrete Time Signal should be absolutely integrable", "Discrete Time Signal should be absolutely multiplicable", "Discrete Time Signal should be absolutely summable", "Discrete Time Signal should be absolutely differentiable"],
    correctAnswer: 2,
    explanation: "For DTFT to exist, the signal must be absolutely summable."
}, {
    id: 19,
    question: "A type of assembly language instruction that alters the course of the program is called a -",
    options: ["flow chart", "loop and jump", "loop", "jump"],
    correctAnswer: 3,
    explanation: "Jump instructions alter the program flow."
}, {
    id: 20,
    question: e.jsxs("div", {
        children: ["Realize the network in Cauer form", e.jsx("img", {
            src: "images/questions/cauer_form.png",
            alt: "Cauer form equation",
            style: {
                maxWidth: "300px"
            },
            onError: n => {
                const t = n.currentTarget;
                t.src.endsWith("/questions/cauer_form.png") ? t.src = "/questions/cauer_form_backup.png" : (console.error("Image failed to load from both locations"),
                t.style.display = "none")
            }
        })]
    }),
    options: [e.jsx("img", {
        src: "images/questions/cauer_form_first.png",
        alt: "First form",
        onError: n => {
            n.currentTarget.src = "/questions/cauer_form_first_backup.png"
        }
    }), e.jsx("img", {
        src: "images/questions/cauer_form_second.png",
        alt: "Second form",
        onError: n => {
            n.currentTarget.src = "/questions/cauer_form_second_backup.png"
        }
    }), e.jsx("img", {
        src: "images/questions/cauer_form_third.png",
        alt: "Third form",
        onError: n => {
            n.currentTarget.src = "/questions/cauer_form_third_backup.png"
        }
    }), e.jsx("img", {
        src: "images/questions/cauer_form_fourth.png",
        alt: "Fourth form",
        onError: n => {
            n.currentTarget.src = "/questions/cauer_form_fourth_backup.png"
        }
    })],
    correctAnswer: 1,
    explanation: "The given network can be realized in Cauer's second form."
}, {
    id: 21,
    question: "According to Rayleigh's theorem, it becomes possible to determine the energy of a signal by:",
    options: ["Estimating the area under the one-fourth power of its amplitude spectrum", "Estimating the area exactly half as that of its amplitude spectrum", "Estimating the area under the square root of its amplitude spectrum", "Estimating the area under the square of its amplitude spectrum"],
    correctAnswer: 3,
    explanation: "Rayleigh's theorem states signal energy equals area under squared amplitude spectrum."
}, {
    id: 22,
    question: "Which one of the following is an example of a hardware:",
    options: ["Web editor", "Instruction", "Memory", "Program"],
    correctAnswer: 2,
    explanation: "Memory is a hardware component, consisting of physical electronic circuits and devices that store data and programs. Web editors, instructions, and programs are software components that run on hardware."
}, {
    id: 23,
    question: "How many full adders are required to build a 7-bit ripple carry adder?",
    options: ["7", "2⁶", "8", "2⁷"],
    correctAnswer: 0,
    explanation: "A 7-bit ripple carry adder requires 7 full adders."
}, {
    id: 24,
    question: "The invalid state of an S-R latch occurs when",
    options: ["S = 1, R = 0", "S = 0, R = 1", "S = 0, R = 0", "S = 1, R = 1"],
    correctAnswer: 3,
    explanation: "S=R=1 is invalid for S-R latch."
}, {
    id: 25,
    question: "In which of the following header file is cin and cout defined in C++?",
    options: ["<iomanip.h>", "<iostream.h>", "<fstream.h>", "<iocode.h>"],
    correctAnswer: 1,
    explanation: "cin and cout are defined in <iostream.h>."
}, {
    id: 26,
    question: "In an N-type semiconductor, the position of Fermi-level:",
    options: ["In conduction Band", "In valance Band", "Near valance Band", "Near Conduction Band"],
    correctAnswer: 3,
    explanation: "In N-type, Fermi level is near conduction band."
}, {
    id: 27,
    question: "A pulse is applied to each input of an Exclusive-OR gate. One pulse goes HIGH at t=0 and goes back LOW at t=1ms. The other pulse goes HIGH at t=0.8ms and goes back LOW at t=3ms. The output pulse can be described as follows:",
    options: ["It goes HIGH at t=0 and back LOW at t=3ms", "It goes HIGH at t=0 and back LOW at t=0.8ms then back to HIGH at t=1ms and back low at t=3ms", "It goes HIGH at t=0 and back LOW at t=0.8ms", "It goes HIGH at t=1ms and back LOW at t=3ms"],
    correctAnswer: 1,
    explanation: "For an XOR gate, the output is HIGH when exactly one input is HIGH. From t=0 to t=0.8ms, only the first input is HIGH, so output is HIGH. From t=0.8ms to t=1ms, both inputs are HIGH, so output is LOW. From t=1ms to t=3ms, only the second input is HIGH, so output is HIGH again. After t=3ms, both inputs are LOW, so output is LOW."
}, {
    id: 28,
    question: "For a two-port network, the condition of symmetry in terms of Y-parameters",
    options: ["h₁₁ = -h₂₂", "Y₁₁ = Y₂₂", "Y₁₂ = Y₂₁", "Y₁₂ = -Y₂₁"],
    correctAnswer: 2,
    explanation: "The condition for symmetry in a two-port network in terms of Y-parameters is Y₁₂ = Y₂₁, which represents reciprocity. For a symmetrical network, the transfer admittance from port 1 to port 2 equals the transfer admittance from port 2 to port 1."
}, {
    id: 29,
    question: "The output of an OR gate is LOW when:",
    options: ["Any input is HIGH", "All inputs are LOW", "All inputs are HIGH", "One input is LOW"],
    correctAnswer: 1,
    explanation: "OR gate output is LOW only when all inputs are LOW."
}, {
    id: 30,
    question: "The total gain of a multistage amplifier is less than the product of the gains of individual stages due to_____",
    options: ["The use of many capacitors", "Power loss in the coupling device", "The use of many transistors", "Loading effect of the next stage"],
    correctAnswer: 3,
    explanation: "Loading effect reduces overall gain."
}, {
    id: 31,
    question: "Int a=5; the word int shows",
    options: ["Ty int pe", "Value", "Variable", "Operator"],
    correctAnswer: 0,
    explanation: "In the declaration 'int a=5;', the word 'int' represents the data type (type specifier) of the variable 'a'. It specifies that the variable will store integer values."
}, {
    id: 32,
    question: e.jsxs("div", {
        children: ["This item is based on the following electrical circuit", e.jsx("img", {
            src: "images/questions/logic_gate_circuit.png",
            alt: "Logic gate circuit",
            style: {
                maxWidth: "300px"
            },
            onError: n => {
                const t = n.currentTarget;
                t.src = "/questions/logic_gate_circuit_backup.png",
                t.onerror = null
            }
        })]
    }),
    options: ["OR Logic gate", "AND Logic gate", "NOR Logic gate", "NAND Logic gate"],
    correctAnswer: 3,
    explanation: "The circuit represents a NAND gate."
}, {
    id: 33,
    question: "What function does booting perform when the computer is switched on?",
    options: ["Shut-down test", "Reliability test", "Power-on-self test", "Correct functioning test"],
    correctAnswer: 2,
    explanation: "Booting performs Power-On Self-Test (POST)."
}, {
    id: 35,
    question: "A two-port network is defined by the relation: (I₁/I₂) = (5V₁ + 3V₂)/(2V₁ - 7V₂). The value of z₂₂ is",
    options: ["7 Ω", "2/31 Ω", "-7 Ω", "-5/41 Ω"],
    correctAnswer: 2,
    explanation: "z₂₂ is -7 Ω from the given relation."
}, {
    id: 36,
    question: "The domain of the expression ABCD + AB + CD + B is:",
    options: ["A and D", "A, B, C, and D", "B only", "C only"],
    correctAnswer: 1,
    explanation: "All variables A, B, C, D are in the expression."
}, {
    id: 37,
    question: "Convert (1011.101)₂ binary number to decimal number",
    options: ["(11.625)₁₀", "(41.5)₁₀", "(11.5)₁₀", "(41.625)₁₀"],
    correctAnswer: 0,
    explanation: "1011.101₂ = 8+2+1+0.5+0.125 = 11.625₁₀."
}, {
    id: 38,
    question: "Which of the following active filters experiences propagation delay at the input type frequency spectrum?",
    options: ["Butterworth filter", "Elliptical filter", "Chebyshev filter", "Bessel filter"],
    correctAnswer: 3,
    explanation: "Bessel filters have propagation delay."
}, {
    id: 39,
    question: "What will be displayed by the following code? int i = 0; while(i <= 5) { i++; } cout << i << endl;",
    options: ["0 1 2 3 4 5", "6", "5", "12345"],
    correctAnswer: 1,
    explanation: "Loop runs until i=6, then prints 6."
}, {
    id: 40,
    question: "An example of a peripheral unit is",
    options: ["The video monitor", "The MPU", "The interphase adapter", "The address register"],
    correctAnswer: 0,
    explanation: "Video monitor is a peripheral device."
}, {
    id: 41,
    question: "If three bulbs are connected in parallel and two bulb blows out, what happens to the other bulb?",
    options: ["The other bulb blows out as well", "The other bulb stops glowing", "The other bulb glows with increased brightness", "The other bulb continues to glow with the same brightness"],
    correctAnswer: 3,
    explanation: "In parallel, bulbs operate independently."
}, {
    id: 42,
    question: "When the crystal diode current is large, the bias is ______.",
    options: ["reverse", "forward", "small", "large"],
    correctAnswer: 1,
    explanation: "When a crystal diode has a large current flowing through it, it is operating under forward bias. In forward bias mode, the diode offers low resistance to current flow, allowing a significant amount of current to pass through the device."
}, {
    id: 43,
    question: "What happens to bandwidth if the total gain increased in cascade amplifiers?",
    options: ["Increases", "Infinite", "Decreases", "Remain the same"],
    correctAnswer: 2,
    explanation: "Gain-bandwidth product is constant, so bandwidth decreases."
}, {
    id: 44,
    question: e.jsxs("div", {
        children: ["This item is based on the diagram of 7-segment display shown below", e.jsx("img", {
            src: "images/questions/7segment_display.png",
            alt: "7-segment display",
            style: {
                maxWidth: "300px"
            },
            onError: n => {
                const t = n.currentTarget;
                t.src.endsWith("/questions/7segment_display.png") ? t.src = "/questions/7segment_display_backup.png" : (console.error("Image failed to load from both locations"),
                t.style.display = "none")
            }
            ,
            onLoad: n => {
                const t = n.currentTarget;
                t.style.display = "block"
            }
        })]
    }),
    options: ["b, c, f, g", "b, d, e, g", "a, c, f, g", "b, c, e, f"],
    correctAnswer: 0,
    explanation: "For input 0100 (4), segments b, c, f, g are active."
}, {
    id: 45,
    question: "The ratio of the voltage transform at the first port to the voltage transform at the second port is known as?",
    options: ["Transfer admittance", "Current transfer ratio", "Voltage transfer ratio", "Transfer impedance"],
    correctAnswer: 2,
    explanation: "This is the definition of voltage transfer ratio."
}, {
    id: 46,
    question: "<div>Current flowing through an element is given by the piecewise function. <img src='/current_function.png' alt='Current function' style='max-width:300px;'></div>",
    options: ["0.333C", "6.667C", "6.333C", "3.333C"],
    correctAnswer: 1,
    explanation: "To find the total charge, we need to integrate the current over time: Q = ∫i(t)dt. For the given piecewise function, this involves calculating the area under the current-time curve. The integration from 0 to 10s with the given function yields 6.667C."
}, {
    id: 47,
    question: e.jsxs("div", {
        children: ["The Thevenin equivalent resistance (R", e.jsx("sub", {
            children: "Th"
        }), ") for the circuit shown in the figure below is", e.jsx("img", {
            src: "images/questions/thevenin_circuit.png",
            alt: "Thevenin circuit",
            style: {
                maxWidth: "300px"
            },
            onError: n => {
                const t = n.currentTarget;
                t.src = (t.src.endsWith("/questions/thevenin_circuit.png"),
                "/questions/thevenin_circuit_backup.png"),
                console.error("Image failed to load from both locations"),
                t.style.display = "none"
            }
            ,
            onLoad: n => {
                const t = n.currentTarget;
                t.style.display = "block"
            }
        })]
    }),
    options: ["2Ω", "0.5Ω", "0.4Ω", "4Ω"],
    correctAnswer: 2,
    explanation: "R<sub>Th</sub> is calculated as 0.4Ω from the circuit."
}, {
    id: 48,
    question: "Which of the following is correct about the voltage transformation ratio in electrical engineering?",
    options: ["Ratio of secondary current to the primary current", "Ratio of induced emf in secondary to induced emf in primary", "Ratio of power in primary to power in secondary", "Ratio of number of primary turns to the number of secondary turns"],
    correctAnswer: 1,
    explanation: "Voltage transformation ratio is secondary to primary voltage."
}, {
    id: 49,
    question: "The system function of a network has a response R(s) = 3/(s² + 5s + 6) and the excitation E(s) = 3/s, then find H(s)",
    options: ["(s⁴ + 5s² + 6s²)", "s", "(s² + 5s + 6)", "1/(s² + 5s + 6)"],
    correctAnswer: 3,
    explanation: "The transfer function H(s) = R(s)/E(s), where R(s) is the response and E(s) is the excitation. Therefore, H(s) = [3/(s² + 5s + 6)]/[3/s] = s/(s² + 5s + 6) = 1/(s + 2)(s + 3) = 1/(s² + 5s + 6)."
}, {
    id: 50,
    question: "The lowest output impedance is obtained in case of BJT amplifiers for;",
    options: ["CB configuration", "CC configuration", "CE configuration", "CE with RE configuration"],
    correctAnswer: 1,
    explanation: "Common Collector has lowest output impedance."
}, {
    id: 51,
    question: e.jsxs("div", {
        children: ["Determine the driving point impedance Z₂₁(s) for the network shown below", e.jsx("img", {
            src: "images/questions/network_impedance.png",
            alt: "Network impedance",
            style: {
                maxWidth: "300px"
            },
            onError: n => {
                const t = n.currentTarget;
                t.src.endsWith("/questions/network_impedance.png") ? t.src = "/questions/network_impedance_backup.png" : (console.error("Image failed to load from both locations"),
                t.style.display = "none")
            }
            ,
            onLoad: n => {
                const t = n.currentTarget;
                t.style.display = "block"
            }
        })]
    }),
    options: ["2(s + 2)", "s + 2", "s + 1", "2(s + 1)"],
    correctAnswer: 3,
    explanation: "Z₂₁(s) = 2(s + 1) from network analysis."
}, {
    id: 52,
    question: "You have an application for a diode to be used in a tuning circuit. A type of diode to use might be;",
    options: ["a Gunn diode", "a Schottky diode", "a varactor diode", "an LED"],
    correctAnswer: 2,
    explanation: "Varactor diodes are used in tuning circuits."
}, {
    id: 53,
    question: "Thevenin's resistance Rth is found",
    options: ["Between any two open terminals", "By removing voltage sources along with their internal resistances", "By short-circuiting the given two terminals", "Between same open terminals as for Eth"],
    correctAnswer: 3,
    explanation: "Rth is found between same terminals as Eth."
}, {
    id: 54,
    question: "When analyzing two port networks in parallel, which of the following is more convenient to use?",
    options: ["z-parameters", "y-parameters", "h-parameters", "T-parameters"],
    correctAnswer: 1,
    explanation: "y-parameters are convenient for parallel networks."
}, {
    id: 55,
    question: "Which of the following is the correct syntax of including a user defined header files in C++?",
    options: ["#include", "#include [userdefined]", "#include", '#include "userdefined"'],
    correctAnswer: 3,
    explanation: 'User headers use quotes: #include "userdefined".'
}, {
    id: 56,
    question: "Tomas is willing to do his final thesis project on high gain and high tuning filter. Depending on his idea; select the appropriate filter for his project title.",
    options: ["Passive filter", "RL filter", "Active filter", "RC filter"],
    correctAnswer: 2,
    explanation: "Active filters provide high gain and tuning."
}, {
    id: 57,
    question: "A Laplace Transform exists when ______. The function is piece-wise continuous ii. The function is of exponential order iii. the function is piecewise discrete iv. The function is of differential order",
    options: ["iii & iv", "i & iv", "i & ii", "ii & iii"],
    correctAnswer: 2,
    explanation: "A Laplace Transform exists when two conditions are met: (i) the function is piecewise continuous, meaning it has a finite number of discontinuities in any finite interval; and (ii) the function is of exponential order, meaning it doesn't grow faster than some exponential function as t approaches infinity."
}, {
    id: 58,
    question: "A time domain signal is considered digital if,",
    options: ["If it is has countable amplitude levels", "It is continuous along the time axis", "If it is discrete along the time axis", "If it has uncountable amplitude levels"],
    correctAnswer: 0,
    explanation: "A digital signal is characterized by having both discrete time (sampled at specific time intervals) AND discrete amplitude levels (quantized values). The key distinguishing feature is that it has a countable (finite) number of possible amplitude values, unlike analog signals which have continuous, uncountable amplitude levels."
}, {
    id: 59,
    question: "Often a common-collector will be the last stage before the load. The main function(s) of this stage is:",
    options: ["To provide voltage gain at the load", "To provide phase inversion of the input signal", "To buffer the voltage amplifiers from the low-resistance load and provide impedance matching for maximum power transfer", "provide a high-frequency path to improve the frequency response"],
    correctAnswer: 2,
    explanation: "Common-collector provides impedance matching."
}, {
    id: 60,
    question: "A cylindrical conductor of length L and uniform cross-section A has resistance R. Another conductor of length 2L and resistance R of the same material has an area of cross-section of?",
    options: ["A/2", "2A", "3A/2", "3A"],
    correctAnswer: 1,
    explanation: "R = ρL/A, so for double length, area must double to maintain R."
}, {
    id: 61,
    question: "A full adder is characterized by",
    options: ["Three inputs and one outputs", "Three inputs and two outputs", "Two inputs and three outputs", "Two inputs and two outputs"],
    correctAnswer: 1,
    explanation: "Full adder has 3 inputs (A,B,Cin) and 2 outputs (Sum,Cout)."
}, {
    id: 62,
    question: "From the following options, which one is Hurwitz polynomial?",
    options: ["s⁵ + 4s⁴ + 7s² + 6s + 2", "s⁴ + 4s³ + 3s + 2", "s⁶ + 7s⁵ + 5s⁴ - 3s³ + 2s² + s + 4", "s³ + 2s² + 4s + 2"],
    correctAnswer: 3,
    explanation: "Only option d has all positive coefficients and roots in left half plane."
}, {
    id: 63,
    question: e.jsxs("div", {
        children: ["This item is based on the diagram of a filter response given below", e.jsx("img", {
            src: "images/questions/filter_response.png",
            alt: "Filter response",
            style: {
                maxWidth: "300px"
            },
            onError: n => {
                const t = n.currentTarget;
                t.src = "/questions/filter_response_backup.png",
                console.error("Image failed to load, fallback image loaded.")
            }
            ,
            onLoad: n => {
                const t = n.currentTarget;
                t.style.display = "block"
            }
        })]
    }),
    options: ["Band stop filter response", "Low-pass filter response", "High pass filter response", "Band pass filter response"],
    correctAnswer: 3,
    explanation: "The response shows a band pass characteristic."
}, {
    id: 64,
    question: "Determine the value of base x if (211)ₓ = (152)₈",
    options: ["4", "8", "7", "9"],
    correctAnswer: 2,
    explanation: "Solving 2x² + x + 1 = 1×64 + 5×8 + 2 gives x=7."
}, {
    id: 65,
    question: "When the temperature of a doped semiconductor is increased, its conductivity______.",
    options: ["does not change", "increases", "depending on its p- or n-type", "decreases"],
    correctAnswer: 1,
    explanation: "Conductivity increases with temperature in semiconductors."
}, {
    id: 66,
    question: e.jsxs("div", {
        children: ["This item is based on the following diagram of the symbol used in electrical network.", e.jsx("img", {
            src: "images/questions/impedance_symbol.png",
            alt: "Impedance symbol",
            style: {
                maxWidth: "300px"
            },
            onError: n => {
                const t = n.currentTarget;
                t.src = (t.src.endsWith("/questions/impedance_symbol.png"),
                "/questions/impedance_symbol_backup.png"),
                console.error("Image failed to load from both locations"),
                t.style.display = "none"
            }
            ,
            onLoad: n => {
                const t = n.currentTarget;
                t.style.display = "block"
            }
        })]
    }),
    options: ["Inductance", "Impedance", "Conductance", "Capacitance"],
    correctAnswer: 1,
    explanation: "The symbol 'Z' represents impedance."
}, {
    id: 67,
    question: "Which of the following according to KCL must be zero?",
    options: ["Algebraic sum of currents entering and leaving a junction", "Algebraic sum of currents in closed-loop", "Algebraic sum of power in closed-loop", "Algebraic sum of voltages across the input and output"],
    correctAnswer: 0,
    explanation: "KCL states sum of currents at junction is zero."
}, {
    id: 68,
    question: e.jsxs("div", {
        children: ["Find the Y₂₁(s) parameter of the network shown below", e.jsx("img", {
            src: "images/questions/y_parameter_network.png",
            alt: "Y-parameter network",
            style: {
                maxWidth: "300px"
            },
            onError: n => {
                const t = n.currentTarget;
                t.src = (t.src.endsWith("/questions/y_parameter_network.png"),
                "/questions/y_parameter_network_backup.png"),
                console.error("Image failed to load from both locations"),
                t.style.display = "none"
            }
            ,
            onLoad: n => {
                const t = n.currentTarget;
                t.style.display = "block"
            }
        })]
    }),
    options: ["5/1 mho", "1/6 mho", "-5/1 mho", "5/1 mho"],
    correctAnswer: 2,
    explanation: "Y₂₁(s) = -5/1 mho from network analysis."
}, {
    id: 69,
    question: "What is the output of the following program? #include <iostream> using namespace std; int main(){ i = 14; j = 10; k = (i > j) ? i : j; cout << k << endl; return 0; }",
    options: ["20", "14", "10", "24"],
    correctAnswer: 1,
    explanation: "This program uses the conditional (ternary) operator. The expression (i > j) ? i : j evaluates to i if i > j is true, otherwise it evaluates to j. Since i (14) is greater than j (10), k gets the value of i, which is 14. Note that technically this program would not compile as written because the variables i, j, and k are not declared, but assuming they were declared properly, 14 would be the output."
}, {
    id: 70,
    question: "What do the negative frequency components represent after transforming a time domain signal to the frequency domain?",
    options: ["The existence of a negative frequency", "Previously sampled frequency components", "The complex conjugate of the positive frequency components", "The phase shift in frequency components"],
    correctAnswer: 2,
    explanation: "Negative frequencies are complex conjugates of positive ones."
}, {
    id: 71,
    question: "An LC circuit cannot produce oscillation, when",
    options: ["Resistance is low", "Resistance is large", "Inductance is large", "Capacitance is large"],
    correctAnswer: 1,
    explanation: "Large resistance prevents oscillation."
}, {
    id: 72,
    question: "In which of the following header file is cin and cout defined in C++?",
    options: ["<iostream.h>", "<iomanip.h>", "<fstream.h>", "<iocode.h>"],
    correctAnswer: 0,
    explanation: "cin and cout are in <iostream.h>."
}, {
    id: 73,
    question: "What is largest number that can be represented using 6 bits?",
    options: ["41.625", "41.5", "12", "11.625"],
    correctAnswer: 0,
    explanation: "6 bits can represent up to 63 (111111₂), but 41.625 is largest given option."
}, {
    id: 74,
    question: "Digital logic circuits in which the logic states of the inputs at any given instant determine the state of the output are called:",
    options: ["Combinational logic circuits", "Sequential logic circuits", "Reasonable logic circuits", "Automated logic circuits"],
    correctAnswer: 0,
    explanation: "Combinational circuits depend only on current inputs."
}, {
    id: 75,
    question: "The signal is said to be ______ whenever we can define a signal at an instant of time",
    options: ["Both deterministic and non-deterministic", "Deterministic", "Continues", "Non-Deterministic"],
    correctAnswer: 1,
    explanation: "Definable at instant implies deterministic."
}, {
    id: 76,
    question: "The energy of power signal is equivalent to______.",
    options: ["Infinity", "One", "Very small", "Zero"],
    correctAnswer: 0,
    explanation: "Power signals have infinite energy."
}, {
    id: 77,
    question: "In C++ class declaration ends with which character?",
    options: ["}", ")", ";", ":"],
    correctAnswer: 2,
    explanation: "Class declarations end with semicolon."
}, {
    id: 78,
    question: "In superposition theorem, when we consider the effect of one voltage source, all the other voltage sources are:",
    options: ["Removed", "Opened", "Undisturbed", "Shorted"],
    correctAnswer: 3,
    explanation: "Other sources are shorted in superposition."
}, {
    id: 79,
    question: "A combinational circuit which is used to change a decimal number into an equivalent BCD number is:",
    options: ["Decoder", "De-multiplexer", "Multiplexer", "Encoder"],
    correctAnswer: 3,
    explanation: "Encoder converts decimal to BCD."
}, {
    id: 80,
    question: "h- parameters are used in the analysis of:",
    options: ["Open circuit analysis", "Electronic circuits", "Transmission line", "Short circuit analysis"],
    correctAnswer: 1,
    explanation: "h-parameters are used in electronic circuit analysis."
}, {
    id: 81,
    question: "Which one of the following is NOT true?",
    options: ["Physical quantities such as position, velocity, acceleration & temperature are digital in nature", "Analogue variables are digitized at the input with the help of an analog-to-digital converter", "Digital representation produces a discrete output", "Analogue representation gives a continuous output"],
    correctAnswer: 0,
    explanation: "Physical quantities are analog, not digital."
}, {
    id: 82,
    question: "When transistors are used in digital circuits they usually operate in the ___",
    options: ["saturation and cutoff regions", "active region", "linear region", "breakdown region"],
    correctAnswer: 0,
    explanation: "Digital circuits use saturation and cutoff."
}, {
    id: 83,
    question: e.jsxs("div", {
        children: ["This item is based on the diagram of a filter network given below", e.jsx("img", {
            src: "images/questions/filter_network.png",
            alt: "Filter network",
            style: {
                maxWidth: "300px"
            },
            onError: n => {
                const t = n.currentTarget;
                t.src = "/questions/filter_network_backup.png",
                console.error("Image failed to load, fallback image loaded.")
            }
            ,
            onLoad: n => {
                const t = n.currentTarget;
                t.style.display = "block"
            }
        })]
    }),
    options: ["Low-pass filter", "Band stop filter", "Band pass filter", "High pass filter"],
    correctAnswer: 2,
    explanation: "The network represents a band pass filter."
}, {
    id: 84,
    question: "While Thevenizing a circuit between two terminals Vth is equal to",
    options: ["E.M.F. of the battery nearest to the terminals", "Net voltage available in the circuit", "Short-circuit terminal voltage", "Open-circuit terminal voltage"],
    correctAnswer: 3,
    explanation: "Vth is the open-circuit voltage."
}, {
    id: 85,
    question: "A filter that passes frequency between two designated cut-off frequencies f_c and attenuates all other frequencies greater than f_d.",
    options: ["Band elimination filter", "High pass filter", "Low pass filter", "Band pass filter"],
    correctAnswer: 3,
    explanation: "This describes a band pass filter."
}, {
    id: 86,
    question: "Which one of the following is the purpose of a wide band-pass filter?",
    options: ["Zero noise", "Sharp cut-off frequency value", "Sharp bandwidth value", "Sharp bandwidth and sharp cut-off frequency value"],
    correctAnswer: 2,
    explanation: "Wide band-pass filters have sharp bandwidth."
}, {
    id: 87,
    question: "Which of the following symbol is used to declare the preprocessor directives in C++?",
    options: ["*", "$", "^", "#"],
    correctAnswer: 3,
    explanation: "Preprocessor directives use #."
}, {
    id: 88,
    question: "If A_v, A_i and A_p represents the voltage gain, current gain and power gain ratio of an amplifier which of the following is correct expression for the corresponding values in decibel?",
    options: ["Power gain: (20 log A_p) dB", "Power gain: 20 log A_p) dB", "Voltage gain: (10 log A_v) dB", "Current gain: 10 log A_i) dB"],
    correctAnswer: 3,
    explanation: "The correct expression for power gain in dB is 10 log A_p (not 20 log A_p). Voltage gain in dB is 20 log A_v, and current gain in dB is 20 log A_i. Since option 4 lists current gain as 10 log A_i, which is the correct formula for current gain in dB, it is the correct answer."
}, {
    id: 89,
    question: "The Fourier series for the function f(x) = sin²x is ______.",
    options: ["0.5-0.5 cos2x", "0.5+0.5 cos2x", "0.5+0.5 sin2x", "0.5-0.5 sin2x"],
    correctAnswer: 0,
    explanation: "Using the trigonometric identity sin²x = (1 - cos(2x))/2, we can express the Fourier series for sin²x as 0.5 - 0.5cos(2x)."
}, {
    id: 90,
    question: "Which of the following is the brain of the computer?",
    options: ["CPU", "Memory", "Control unit", "Arithmetic and Logic unit"],
    correctAnswer: 0,
    explanation: "The CPU (Central Processing Unit) is commonly referred to as the 'brain' of the computer because it processes instructions, performs calculations, and coordinates the activities of all other hardware components. It contains both the Control Unit and the Arithmetic and Logic Unit as its subcomponents."
}]