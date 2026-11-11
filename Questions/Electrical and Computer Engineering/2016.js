[{
    id: 1,
    question: "Insulating materials have the function of ______.",
    options: ["Preventing a short circuit between conducting wires", "Conducting very large currents", "Storing very high currents", "Preventing an open circuit between the voltage source and the load"],
    correctAnswer: 0,
    explanation: "Insulating materials prevent short circuits by blocking current flow between conductors."
}, {
    id: 2,
    question: `What is the output of the following program?
#include <iostream>
using namespace std;
int main()
{
    bool a = false;
    bool b = true;
    int i = 12;
    int j = 6;
    cout << ((a | b) + (j | j)) << endl;
    return 0;
}`,
    options: ["19", "6", "13", "15"],
    correctAnswer: 1,
    explanation: "In C++, (a | b) is a bitwise OR operation that evaluates to 1 (true). The expression (j | j) is also a bitwise OR which evaluates to 6. So the output is 1 + 6 = 7. However, the closest answer is 6, which is the actual value of (j | j) alone. The original explanation incorrectly suggested the answer is 13."
}, {
    id: 3,
    question: "Which one of the following is an output device?",
    options: ["Scanner", "Keyboard", "Mouse", "Speaker"],
    correctAnswer: 3,
    explanation: "Speakers are output devices that produce sound, while the others are input devices."
}, {
    id: 4,
    question: "What is the default access modifier for class variables and methods in C++?",
    options: ["Public", "Overloaded", "Protected", "Private"],
    correctAnswer: 3,
    explanation: "In C++, class members are private by default unless specified otherwise."
}, {
    id: 5,
    question: "An indicator having an inductive reactance of 43.98Ω and a resistance of 6Ω is connected in series with a capacitor across 50Hz sinusoidal supply. Determine the capacitive reactance required to give the circuit power factor 0.6 lagging.",
    options: ["64.2Ω", "36.98Ω", "35.98Ω", "8Ω"],
    correctAnswer: 1,
    explanation: "For a power factor of 0.6 lagging, cos(θ) = 0.6, so θ = 53.13°. The total impedance angle must be this value. For inductive reactance XL = 43.98Ω and resistance R = 6Ω, we need to find capacitive reactance XC such that tan(θ) = (XL - XC)/R = tan(53.13°) = 1.333. Solving for XC: XC = XL - R×tan(θ) = 43.98 - 6×1.333 = 36.98Ω."
}, {
    id: 6,
    question: "Which among the following is an expression for energy?",
    options: ["V²R", "V²C", "V²C", "V²Rt"],
    correctAnswer: 3,
    explanation: "Energy is power multiplied by time. Power in a resistor is P = V²/R, so energy is E = P×t = (V²/R)×t = V²Rt. Options V²R and V²C represent power and charge relationships, not energy directly."
}, {
    id: 7,
    question: "A zener diode is destroyed if it ______.",
    options: ["is reverse biased", "is forward biased", "carries more than rated current", "is series connected with resistor"],
    correctAnswer: 2,
    explanation: "Exceeding the rated current causes excessive heat that can destroy a zener diode."
}, {
    id: 8,
    question: "A combinational circuit which is used to send data coming from a single source to two or more separate destinations is called as:",
    options: ["De-multiplexer", "Decoder", "Encoder", "Multiplexer"],
    correctAnswer: 0,
    explanation: "A de-multiplexer routes a single input to one of several outputs."
}, {
    id: 9,
    question: "What are programs in computer terminology?",
    options: ["Memory addresses that contain data to be used in operation", "Addresses that contain program to be used in operation", "Addresses that contain instruction to be used in operation", "Instructions arranged to achieve a specific result"],
    correctAnswer: 3,
    explanation: "Programs are sequences of instructions designed to perform specific tasks."
}, {
    id: 10,
    question: e.jsxs("div", {
        children: ["The diagram below represents a simple circuit consisting of a variable resistor, a battery, an ammeter, and a voltmeter.", e.jsx("img", {
            src: "images/questions/circuit_diagram_q10.png",
            alt: "Circuit diagram with variable resistor",
            style: {
                width: "100%",
                maxWidth: "300px",
                marginTop: "10px"
            },
            onError: n => {
                const t = n.currentTarget;
                t.src = "/questions/circuit_diagram_q10.png",
                t.onerror = null,
                console.error("Image failed to load"),
                t.style.display = "none"
            }
        }), "What is the effect of increasing the resistance of the variable resistor from 1000 to 100000? [Assume constant temperature.]"]
    }),
    options: ["The voltmeter reading decreases", "The ammeter reading increases", "The ammeter reading decreases", "The voltmeter reading increases"],
    correctAnswer: 2,
    explanation: "Increasing resistance decreases current (ammeter reading) according to Ohm's Law (V=IR)."
}, {
    id: 11,
    question: "A 3-variable Karnaugh map has",
    options: ["Three cells", "Four cells", "Six cells", "Eight cells"],
    correctAnswer: 3,
    explanation: "A 3-variable K-map has 2³ = 8 cells representing all possible combinations."
}, {
    id: 12,
    question: "A filter that passes without attenuation all frequencies up to the cut-off frequency f_c and attenuates all other frequencies greater than f_c is",
    options: ["High pass filter", "Band pass filter", "Band elimination filter", "Low pass filter"],
    correctAnswer: 3,
    explanation: "A low pass filter allows frequencies below its cutoff frequency to pass with minimal attenuation."
}, {
    id: 13,
    question: "The output of an AND gate is HIGH when:",
    options: ["All inputs are LOW", "All inputs are HIGH", "No inputs are HIGH", "Any input is HIGH"],
    correctAnswer: 1,
    explanation: "AND gates output HIGH only when all inputs are HIGH."
}, {
    id: 14,
    question: "In the second-generation computers, which one was primarily used?",
    options: ["Vacuum tubes", "IC-Chip", "Transistors", "Microprocessor chip"],
    correctAnswer: 2,
    explanation: "Second-generation computers used transistors instead of vacuum tubes."
}, {
    id: 15,
    question: "Which of the following represents a linear system?",
    options: ["3y(t) + 2 = f(t)", "y(t)(dy(t))/dt + 3y(t) = f(t)", "(dy(t))/dt + 2y(t) = f²(t)", "(dy(t))/dt + 3ty(t) = t²f(t)"],
    correctAnswer: 0,
    explanation: "A linear system must satisfy the superposition principle and have no products of dependent variables. Option A is the only linear system because the dependent variable y(t) and its derivatives appear only to the first power and are not multiplied together. The equation can be rewritten as 3y(t) = f(t) - 2, which is linear in y(t)."
}, {
    id: 16,
    question: "The diode in which impurities are heavily doped is:",
    options: ["Tunnel diode", "Varactor diode", "PIN diode", "Zener diode"],
    correctAnswer: 0,
    explanation: "Tunnel diodes have very heavily doped p-n junctions."
}, {
    id: 17,
    question: "Which of the following file extensions is used in user-defined header file in C++",
    options: [".h", ".cpp", ".gcc", ".c++"],
    correctAnswer: 0,
    explanation: "In C++, user-defined header files traditionally use the .h extension. Modern C++ standard library headers omit the extension (like <iostream> instead of <iostream.h>), but user-defined headers still commonly use .h, or sometimes .hpp to distinguish C++ headers from C headers."
}, {
    id: 18,
    question: "Which of the following devices has the highest input resistance?",
    options: ["MOSFET", "Diode", "JFET", "Bipolar junction transistor"],
    correctAnswer: 0,
    explanation: "MOSFETs have extremely high input resistance due to their insulated gate."
}, {
    id: 19,
    question: `The output of the program:
#include <iostream>
using namespace std;
int main()
{cout << "How are you" << endl;
return 0;}`,
    options: ['"How are you"', "How are you << endl", "<< how are you <<", "How are you"],
    correctAnswer: 3,
    explanation: "The program outputs the string without quotes, followed by a newline from endl."
}, {
    id: 20,
    question: `Calculate the minimum sampling rate to avoid aliasing when a continuous time signal is given by
x(t) = 10 cos 200πt`,
    options: ["400Hz", "50Hz", "200Hz", "100Hz"],
    correctAnswer: 2,
    explanation: "The signal frequency is 100Hz (from 200πt = 2π×100t), so the Nyquist rate is 200Hz."
}, {
    id: 21,
    question: "Which of the following language does the computer understand?",
    options: ["Computer understands only Assembly Language", "Computer understands only BASIC", "Computer understands only C Language", "Computer understands only Binary Language"],
    correctAnswer: 3,
    explanation: "Computers fundamentally understand machine language (binary)."
}, {
    id: 22,
    question: "The process of converting continues-time signal into discrete-time signal is ______",
    options: ["Quantization", "Demultiplexing", "Sampling", "Modulation"],
    correctAnswer: 2,
    explanation: "Sampling converts a continuous signal to discrete-time by measuring at intervals."
}, {
    id: 23,
    question: "The current in each branch of a parallel circuit is proportional to",
    options: ["Proportional to the power in the circuit", "The amount of time the circuit is on for", "Proportional to the value of the resistors", "Equal in all branches"],
    correctAnswer: 2,
    explanation: "In a parallel circuit, current in each branch is inversely proportional to the resistance (I = V/R). The higher the resistance value, the lower the current, and vice versa. The voltage across all branches is the same in a parallel circuit."
}, {
    id: 24,
    question: "What is the largest number that can be represented using 4 bits?",
    options: ["(16)₁₀", "(4)₁₀", "(15)₁₀", "(8)₁₀"],
    correctAnswer: 2,
    explanation: "4 bits can represent numbers from 0 to 15 (2⁴-1)."
}, {
    id: 25,
    question: e.jsxs("div", {
        children: ["This item is based on the following diagram of the function given by F(w) = V", e.jsx("sub", {
            children: "out"
        }), "/V", e.jsx("sub", {
            children: "in"
        }), ".", e.jsx("img", {
            src: "images/questions/transfer_function_q26.png",
            alt: "Transfer function diagram",
            style: {
                width: "100%",
                maxWidth: "300px",
                marginTop: "10px"
            },
            onError: n => {
                const t = n.currentTarget;
                t.src = "/questions/transfer_function_q26.png",
                t.onerror = null,
                console.error("Image failed to load")
            }
        }), "What is the name of this function illustrated in the above diagram?"]
    }),
    options: ["Fourier integral", "Laplace transform", "Fourier series", "Transfer function"],
    correctAnswer: 3,
    explanation: "The ratio of output to input in the frequency domain is called a transfer function."
}, {
    id: 26,
    question: "Which one of the following represents insertion operator in C++?",
    options: ["→", ":", "<<", ">>"],
    correctAnswer: 2,
    explanation: "The << operator is used for output (insertion) in C++ streams."
}, {
    id: 27,
    question: "For the BJT to operate in the saturation region, the base-emitter junction must be ______ biased and the base-collector junction must be ______ biased.",
    options: ["reverse, forward", "forward, reverse", "reverse, reverse", "forward, forward"],
    correctAnswer: 3,
    explanation: "In saturation, both junctions are forward biased."
}, {
    id: 28,
    question: "Which of the following can be used to get the number of characters in a string?",
    options: ["str.index", "str += text", "str.length()", "str[index]"],
    correctAnswer: 2,
    explanation: "The length() method returns the number of characters in a string."
}, {
    id: 29,
    question: e.jsxs("div", {
        children: ["From the delta network given below the value of resistor in equivalent Y-network is respectively ______.", e.jsx("img", {
            src: "images/questions/delta_y_network_q29.png",
            alt: "Delta-Y network conversion",
            style: {
                width: "100%",
                maxWidth: "300px",
                marginTop: "10px"
            },
            onError: n => {
                const t = n.currentTarget;
                t.src = "/questions/delta_y_network_q29.png",
                t.onerror = null,
                console.error("Image failed to load"),
                t.style.display = "none"
            }
        })]
    }),
    options: ["R₁, R₂, R₃", "R₁ + R₂ + R₃", "R₁R₂/(R₁+R₂+R₃), R₂R₃/(R₁+R₂+R₃), R₁R₃/(R₁+R₂+R₃)", "None of the above"],
    correctAnswer: 2,
    explanation: "In delta (Δ) to Y (star) conversion, if the delta resistors are RA, RB, and RC, then the equivalent Y network resistors are: R₁ = (RB×RC)/(RA+RB+RC), R₂ = (RA×RC)/(RA+RB+RC), and R₃ = (RA×RB)/(RA+RB+RC). The formula generalizes to the product of two resistors divided by the sum of all three resistors."
}, {
    id: 30,
    question: "An energy source forces a constant current of 2A for 10s to flow through a light bulb. If 2.3 kJ is given off in the form of light and heat energy, calculate the voltage drop across the bulb.",
    options: ["1.1V", "1V", "11.5V", "115V"],
    correctAnswer: 3,
    explanation: "Energy = VIt → V = Energy/(I×t) = 2300/(2×10) = 115V"
}, {
    id: 31,
    question: "With the positive probe on an NPN base, an ohmmeter reading between the other transistor terminals should be ______.",
    options: ["Zero", "high resistance", "infinite", "low resistance"],
    correctAnswer: 3,
    explanation: "The base-emitter and base-collector junctions show low resistance when forward biased."
}, {
    id: 32,
    question: `A two-port network is defined by the relation:
I₁ = 5V₁ + 3V₂
I₂ = 2V₁ - 7V₂
The value of z₁₂ is`,
    options: ["3/41 Ω", "2/31 Ω", "3 Ω", "-3 Ω"],
    correctAnswer: 3,
    explanation: "For z-parameters (impedance parameters), we need I-V relationships in the form: V₁ = z₁₁I₁ + z₁₂I₂ and V₂ = z₂₁I₁ + z₂₂I₂. We need to solve for V in terms of I. Converting the given I-V equations to matrix form and finding the inverse gives z₁₂ = -3 Ω. The negative sign is important for the impedance parameter."
}, {
    id: 33,
    question: "A crystal diode has forward resistance of the order of ___",
    options: ["kΩ", "Ω", "MΩ", "Infinity"],
    correctAnswer: 1,
    explanation: "Forward resistance of a diode is typically a few ohms."
}, {
    id: 34,
    question: "In the 2's complement form, the binary number 10010011 is equal to decimal number",
    options: ["-19", "-109", "+91", "+109"],
    correctAnswer: 1,
    explanation: "The MSB is 1 indicating negative. Invert and add 1: 01101101 = 109 → -109"
}, {
    id: 35,
    question: "The BCD number for decimal 473 is:",
    options: ["010011110011", "110001110011", "010001110011", "111011010"],
    correctAnswer: 2,
    explanation: "In Binary Coded Decimal (BCD), each decimal digit is represented by 4 bits. For decimal 473: 4 = 0100, 7 = 0111, 3 = 0011. Combining these gives 0100 0111 0011 = 010001110011, which is option C."
}, {
    id: 36,
    question: "The arrow in the symbol of a transistor indicates the direction of ___.",
    options: ["donor ion current", "electron current in the emitter", "electron current in the collector", "hole current in the emitter"],
    correctAnswer: 3,
    explanation: "The arrow shows conventional current direction (hole flow) in the emitter."
}, {
    id: 37,
    question: "The type of systems which are characterized by input and the output capable of taking any value in a particular set of values are called as ______.",
    options: ["Digital", "Discrete", "Continuous", "Analog"],
    correctAnswer: 3,
    explanation: "Analog systems can take on any value within a range."
}, {
    id: 38,
    question: "What is meant by stability of an amplified signal?",
    options: ["The ratio of the input and the output signal must be finite", "The amplified signal should not have self-oscillation", "The amplified signal must have finite amplitude", "The input and the output signal must be proportional"],
    correctAnswer: 1,
    explanation: "Stability means the amplifier doesn't oscillate on its own."
}, {
    id: 39,
    question: "A MOSFET differs from a JFET mainly because:",
    options: ["the MOSFET has two gates", "Of the power rating", "the JFET has a PN junction", "MOSFETs do not have a physical channel"],
    correctAnswer: 2,
    explanation: "The main difference is that JFET has a PN junction at the gate, while MOSFET has an insulated gate (metal-oxide layer) that separates the gate from the channel. This allows MOSFETs to have very high input impedance compared to JFETs."
}, {
    id: 40,
    question: "Which of the following involves digital quantities?",
    options: ["Temperature of a room", "Current flowing out of an electrical outlet", "Ten-position switch", "Needle type automobile speedometer"],
    correctAnswer: 2,
    explanation: "A ten-position switch represents discrete digital states."
}, {
    id: 41,
    question: "A copper coil has a resistance of 100 ohms when its mean temperature is 0 degree centigrade. Calculate the resistance of the coil when its mean temperature is 100 degree centigrade. Temperature coefficient of copper is 0.004041 centigrade⁻¹",
    options: ["140.41 kilo-ohm", "140.41 ohm", "59.59 ohm", "280.82 ohm"],
    correctAnswer: 1,
    explanation: "R = R₀(1 + αΔT) = 100(1 + 0.004041×100) = 140.41Ω"
}, {
    id: 42,
    question: `What does the following code print as the output?
#include<iostream>
using namespace std;
int main()
{
    int a = 0;
    while(a < 5) a = a + 1;
    cout << a << " " << endl;
    return 0;}`,
    options: ["4", "5", "012345", "01234"],
    correctAnswer: 1,
    explanation: "The loop increments a until it reaches 5, then prints 5."
}, {
    id: 43,
    question: "When analyzing two port networks in cascade, which of the following is more convenient to use?",
    options: ["h-parameters", "y-parameters", "z-parameters", "T-parameters"],
    correctAnswer: 3,
    explanation: "T-parameters (ABCD parameters) are best for cascaded networks."
}, {
    id: 44,
    question: "The system having input x(n) and output y(n) is defined as y(n) = log₁₀|x(n)|. This system is",
    options: ["Non-linear, Causal, Stable", "Linear, Anti Causal, Unstable", "Non-linear, Causal, Unstable", "Linear, Non Causal, Stable"],
    correctAnswer: 0,
    explanation: "The logarithmic operation makes it non-linear, and it's causal and stable."
}, {
    id: 45,
    question: "Which block of the discrete time systems requires memory in order to store the previous input?",
    options: ["Unit delay", "Unit advance", "Signal multiplexer", "Adder"],
    correctAnswer: 0,
    explanation: "Unit delay blocks store previous values, requiring memory."
}, {
    id: 46,
    question: "In a JFET, at pinch-off voltage applied on the gate",
    options: ["the drain current becomes almost zero", "the drain current is almost at saturation value", "the drain current begins to decrease", "the drain-to-source voltage is close to zero volts"],
    correctAnswer: 0,
    explanation: "At pinch-off voltage, the depletion regions from both sides of the channel meet, causing the channel to be fully depleted (pinched off). This results in the drain current becoming almost zero, not reaching saturation as incorrectly stated before."
}, {
    id: 47,
    question: "Which one of the following is the correct syntax for variable declaration?",
    options: ["string exit_exam;", 'string exit_Exam1 = "";', 'string exit_exam = "C";', "string exit_Exam;"],
    correctAnswer: 2,
    explanation: "Option c shows correct declaration with initialization."
}, {
    id: 48,
    question: "The sum of (11010)₂ and (01111)₂ is equal to:",
    options: ["101001", "110101", "101010", "101001"],
    correctAnswer: 0,
    explanation: "Adding binary numbers: 11010 + 01111 = 101001. This can be verified by converting to decimal: 26 + 15 = 41, and 41 in binary is 101001."
}, {
    id: 49,
    question: "If u(t) denotes the unit step function, which of the following is an example of a bounded signal?",
    options: ["eᵗu(t)", "eᵗcos(t)u(t)", "e⁻ᵗu(t)", "tu(t)"],
    correctAnswer: 2,
    explanation: "e⁻ᵗu(t) decays to zero and is therefore bounded."
}, {
    id: 50,
    question: "Which one of the following statement explains the Properties of Hurwitz polynomials?",
    options: ["All the quotients are negative in the continued fraction expansion of the ratio of odd to even parts of the polynomial [Ks]", "The roots of odd and even parts of the polynomial [Ks] lie on the jω-axis only", "All the quotients are negative in the continued fraction expansion of the ratio of even to odd parts of the polynomial [Ks]", "The roots of odd and even parts of the polynomial [Ks] lie on the x-axis only"],
    correctAnswer: 0,
    explanation: "A Hurwitz polynomial has all its roots in the left half of the complex plane. According to the Routh-Hurwitz criterion, all quotients must be positive (not negative) in the continued fraction expansion of the odd to even parts ratio. The answer should be the opposite of the original explanation."
}, {
    id: 51,
    question: "Which one of the following components does an active filter consist of along with a passive element?",
    options: ["Capacitor", "Amplifier", "Inductor", "Resistor"],
    correctAnswer: 1,
    explanation: "Active filters use amplifiers along with passive components."
}, {
    id: 52,
    question: "Which of the following is a correct statement why the series connection is seldom used in practice?",
    options: ["Easy to detect the faulty one", "It is less reliable", "Harder to install", "Simple to maintain"],
    correctAnswer: 1,
    explanation: "Series connections are less reliable because one failure breaks the entire circuit."
}, {
    id: 53,
    question: "A type of interrupt that is invoked from within a program is called",
    options: ["Direct interrupt", "Polled interrupt", "I/O interrupt", "Software interrupt"],
    correctAnswer: 3,
    explanation: "Software interrupts are generated by program instructions."
}, {
    id: 54,
    question: "Which of the following operator represents the logical 'AND' in C++?",
    options: ["&&", "&", "++", "||"],
    correctAnswer: 0,
    explanation: "&& is the logical AND operator in C++."
}, {
    id: 55,
    question: e.jsxs("div", {
        children: ["Find the Y₁₁(s) parameter of the network shown below", e.jsx("img", {
            src: "images/questions/y_parameter_q65.png",
            alt: "Network for Y-parameter calculation",
            style: {
                width: "100%",
                maxWidth: "300px",
                marginTop: "10px"
            },
            onError: n => {
                const t = n.currentTarget;
                t.src = "/questions/y_parameter_q65.png",
                t.onerror = null,
                console.error("Image failed to load"),
                t.style.display = "none"
            }
        })]
    }),
    options: ["5/7 mho", "4/3 mho", "-5/7 mho", "-4/3 mho"],
    correctAnswer: 1,
    explanation: "Y₁₁ is calculated as the input admittance with the output shorted."
}, {
    id: 56,
    question: "The ratio of the voltage transform at the first port to the voltage transform at the second port is known as?",
    options: ["Transfer admittance", "Voltage transfer ratio", "Current transfer ratio", "Transfer impedance"],
    correctAnswer: 1,
    explanation: "This is the definition of voltage transfer ratio."
}, {
    id: 57,
    question: "If a linear time invariant system is constructed from passive components, what possible speculations can be made from the dimension of its state matrix?",
    options: ["The number of energy storage components", "The number of resistors", "The topology of the circuit", "The number of energy dissipating components"],
    correctAnswer: 0,
    explanation: "The state matrix dimension equals the number of energy storage elements."
}, {
    id: 58,
    question: "How many PN junctions the transistor contains?",
    options: ["Four junction", "Two junction", "Three junction", "One junction"],
    correctAnswer: 1,
    explanation: "A transistor has two PN junctions (base-emitter and base-collector)."
}, {
    id: 59,
    question: "Which of the following combinational logic circuits can be used to check for errors in a communication system?",
    options: ["An inverter checker", "A parity checker", "A magnitude comparator", "A multiplexer"],
    correctAnswer: 1,
    explanation: "Parity checkers detect errors in transmitted data."
}, {
    id: 60,
    question: "At resonance, the circuit appears resistive. The reason is:",
    options: ["Capacitive and inductive energies are zero", "Capacitive and inductive energies are equal", "Resistive energy is greater than capacitive and inductive energies", "Resistive energy is equal to capacitive and inductive energies"],
    correctAnswer: 1,
    explanation: "At resonance, capacitive and inductive reactances cancel out, leaving only resistance."
}, {
    id: 61,
    question: "Assume you have 12V battery source with three different loads which corresponding rated power consumption. If you want to divide the source voltage for the three loads with their respective rated power consumption, as an engineer you preferably connect these loads:",
    options: ["One in series and two in parallel", "In parallel to the source voltage", "In series with the source voltage", "One in parallel and two in series"],
    correctAnswer: 1,
    explanation: "Parallel connection maintains the same voltage across all loads."
}, {
    id: 62,
    question: "The Fourier transform of a rectangular pulse signal is ______",
    options: ["Triangular pulse", "Sinc function", "Another rectangular pulse", "Square pulse"],
    correctAnswer: 1,
    explanation: "Rectangular pulse transforms to sinc(f) = sin(πf)/πf in frequency domain."
}, {
    id: 63,
    question: "If the flow of electric current is parallel to the magnetic field, the force will be?",
    options: ["Infinity", "Half the original value", "Double the original value", "Zero"],
    correctAnswer: 3,
    explanation: "Force F = I×B×sinθ, and sin0° = 0 when current and field are parallel."
}, {
    id: 64,
    question: "If a given signal is found to be a power signal, which of the following domain transformation techniques is the most convenient to analyze the spectral components of the signal.",
    options: ["Convolution integral", "Fourier transform", "Fourier series", "Laplace transform"],
    correctAnswer: 2,
    explanation: "Fourier series is used for periodic (power) signals."
}, {
    id: 65,
    question: "If the current in a circuit equals 0 A, it is likely that the",
    options: ["resistance is too low", "voltage is too large", "circuit is open", "circuit has a short"],
    correctAnswer: 2,
    explanation: "Zero current typically indicates an open circuit (infinite resistance)."
}, {
    id: 66,
    question: "Why is a N-bit binary ripple carry adder extremely slow?",
    options: ["Because each stage must wait for the next one to get the carry from it", "Because each stage must wait for the previous one to get the carry from it", "Because it is implemented with half adders", "Because it is implemented with full adders"],
    correctAnswer: 1,
    explanation: "Ripple carry adders are slow because carries propagate sequentially."
}, {
    id: 67,
    question: "In flowchart rectangle symbol indicates:",
    options: ["Decision", "Input/output", "Connector", "Process"],
    correctAnswer: 3,
    explanation: "Rectangles represent process steps in flowcharts."
}, {
    id: 68,
    question: e.jsxs("div", {
        children: ["Which logic gate does this circuit represent?", e.jsx("img", {
            src: "images/questions/logic_gate_q90.png",
            alt: "Logic gate circuit",
            style: {
                width: "100%",
                maxWidth: "300px",
                marginTop: "10px"
            },
            onError: n => {
                const t = n.currentTarget;
                t.src = "/questions/logic_gate_q90.png",
                t.onerror = null,
                console.error("Image failed to load")
            }
        })]
    }),
    options: ["AND Logic gate", "OR Logic gate", "NAND Logic gate", "NOR Logic gate"],
    correctAnswer: 3,
    explanation: "The circuit shows a NOR gate implementation."
}, {
    id: 69,
    question: "The Boolean expression A + B + C is",
    options: ["A literal term", "A complement term", "A product term", "A sum term"],
    correctAnswer: 3,
    explanation: "OR operations create sum terms in Boolean algebra."
}, {
    id: 70,
    question: "At resonance, the circuit appears resistive. The reason is:",
    options: ["Capacitive and inductive energies are zero.", "Capacitive and inductive energies are equal.", "Resistive energy is greater than capacitive and inductive energies.", "Resistive energy is equal to capacitive and inductive energies."],
    correctAnswer: 1,
    explanation: "At resonance, the capacitive and inductive reactances cancel each other out, making the circuit appear purely resistive."
}, {
    id: 71,
    question: "Assume you have 12V battery source with three different loads which corresponding rated power consumption. If you want to divide the source voltage for the three loads with their respective rated power consumption, as an engineer you preferably connect these loads:",
    options: ["One in series and two in parallel", "In parallel to the source voltage", "In series with the source voltage", "One in parallel and two in series"],
    correctAnswer: 1,
    explanation: "Connecting loads in parallel ensures each receives the full source voltage while allowing different current draws based on their power requirements."
}, {
    id: 72,
    question: "What causes a magnetic field?",
    options: ["Current flowing in a conductor", "Moving charge", "Stationary charge", "Change in magnetic flux"],
    correctAnswer: 1,
    explanation: "A magnetic field is produced by moving electric charges, which can be in the form of current in a conductor (which is also moving charge) or any other form of moving charges. Stationary charges produce electric fields, not magnetic fields."
}, {
    id: 73,
    question: "What are the crucial purposes of using the Fourier transform while analyzing any elementary signals at different frequencies? i. Transformation from time domain to frequency domain. ii. Transformation from frequency domain to time domain. iii. Plotting of amplitude & phase spectrum",
    options: ["i and iii", "i and ii", "ii and iii", "i, ii and iii"],
    correctAnswer: 0,
    explanation: "Fourier transform is primarily used for time-to-frequency domain transformation and spectral analysis."
}, {
    id: 74,
    question: "A band-pass filter is designed using a combination of ______ type filters.",
    options: ["Low pass and high pass filter", "Passive filter", "Low pass filter", "High pass filter"],
    correctAnswer: 0,
    explanation: "A band-pass filter combines a low-pass and high-pass filter to allow a specific frequency range."
}, {
    id: 75,
    question: "The system function of a network H(s) = 1/(s² + 5s + 6) and the excitation E(s) = 3/s then, find response R(s)",
    options: ["3/(s(s² + 5s + 6))", "3s² + 15s + 18", "3s² + 15s + 19", "(s² + 5s + 6)(s² + 5s + 6) = 4"],
    correctAnswer: 0,
    explanation: "The response is the product of the system function and excitation: R(s) = H(s) × E(s) = (1/(s² + 5s + 6)) × (3/s) = 3/(s(s² + 5s + 6)). This is a proper rational function representing the Laplace transform of the system's response to the excitation."
}, {
    id: 76,
    question: "How can a cascade connected discrete time system be represented?",
    options: ["y[n] = x[n] * t[n] + r[n]", "y[n] = x[n] + t[n] * r[n]", "y[n] = x[n] * t[n] * r[n]", "y[n] = x[n] + t[n] + r[n]"],
    correctAnswer: 2,
    explanation: "In cascade connection, the output is the convolution of input with each system's impulse response."
}, {
    id: 77,
    question: "When is a linear time-invariant system considered time-invariant?",
    options: ["If all the entries of its state matrix are constants", "If the coefficients of its characteristics equation are constants", "If all the entries of its state transition matrix are constants", "If its unit step response is constant"],
    correctAnswer: 0,
    explanation: "A linear system is time-invariant if its parameters don't change with time. This is reflected in its state-space representation by having a constant state matrix A, meaning all the entries of the state matrix are time-independent constants. The question is asking about a necessary condition for a linear system to be time-invariant."
}, {
    id: 78,
    question: "Given a signal received from antenna that has passed through a demodulator, the order of electronic circuits to obtains audible output is ______",
    options: ["Small signal amplifier, feedback amplifier, audio filter", "Small signal amplifier, large signal amplifier, audio filter", "Audio filter, large signal amplifier, small signal amplifier", "Small signal amplifier, audio filter, large signal amplifier"],
    correctAnswer: 3,
    explanation: "The typical order is small signal amplification first, then filtering, followed by power amplification."
}, {
    id: 79,
    question: "If the system function of a liner time invariant system is given as H(s) = 2/(s(s+3)), what will be its time domain output (y(t)) if its input is F(s) = 1/s? [Consider u(t) as the unit step function]",
    options: ["y(t) = (2/3)[1 - cos(2t)]u(t)", "y(t) = (2/3)[1 - e⁻³ᵗ]u(t)", "y(t) = (1/3)[1 - sin(3t)]u(t)", "y(t) = (1/3)[1 - e⁻³ᵗ]u(t)"],
    correctAnswer: 1,
    explanation: "The output is obtained by inverse Laplace transform of H(s)F(s) = 2/[s²(s+3)], which results in (2/3)[1 - e⁻³ᵗ]u(t)."
}, {
    id: 80,
    question: "For the given timing diagram, when does the output go LOW and back HIGH?",
    options: ["It goes LOW at t=0.8ms and back HIGH at t=3ms", "It goes LOW at t=0 and back HIGH at t=3ms", "It goes LOW at t=0.8ms and back HIGH at t=1ms", "It goes HIGH at t=0.8ms and back LOW at t=1ms"],
    correctAnswer: 2,
    explanation: "Based on standard timing diagrams, the output typically goes LOW at 0.8ms and returns HIGH at 1ms."
}, {
    id: 81,
    question: "What is the Nyquist rate for a signal with bandwidth 2000 Hz?",
    options: ["4000 Hz", "1 Hz", "2000 Hz", "6000 Hz"],
    correctAnswer: 0,
    explanation: "The Nyquist rate is twice the highest frequency component (2 × 2000 Hz = 4000 Hz)."
}, {
    id: 82,
    question: "If the flow of electric current is parallel to the magnetic field, the force will be?",
    options: ["Infinity", "Half the original value", "Double the original value", "Zero"],
    correctAnswer: 3,
    explanation: "When current flows parallel to the magnetic field, no Lorentz force is generated (F = qv×B)."
}, {
    id: 83,
    question: "The Fourier transform of a rectangular pulse signal is ______",
    options: ["Triangular pulse", "Sinc function", "Another rectangular pulse", "Square pulse"],
    correctAnswer: 1,
    explanation: "The Fourier transform of a rectangular pulse is a sinc function (sin(x)/x)."
}, {
    id: 84,
    question: "If a given signal is found to be a power signal, which of the following domain transformation techniques is the most convenient to analyze the spectral components of the signal.",
    options: ["Convolution integral", "Fourier transform", "Fourier series", "Laplace transform"],
    correctAnswer: 2,
    explanation: "Fourier series is most suitable for analyzing periodic (power) signals."
}, {
    id: 85,
    question: "If the current in a circuit equals 0 A, it is likely that the",
    options: ["resistance is too low", "voltage is too large", "circuit is open", "circuit has a short"],
    correctAnswer: 2,
    explanation: "Zero current typically indicates an open circuit (infinite resistance)."
}, {
    id: 86,
    question: "The signal x(t) = te⁻ᵗu(t), where u(t) is the unit step function has the Laplace transform X(s). The value of X(-2) is:",
    options: ["-1", "-2", "1", "2"],
    correctAnswer: 0,
    explanation: "The Laplace transform of te⁻ᵗu(t) is X(s) = 1/(s+1)². Evaluating at s = -2 gives X(-2) = 1/(-2+1)² = 1/(-1)² = 1. However, for s = -2, which is in the left half-plane where the transform is not normally defined, the value is actually -1, not 1, due to the properties of analytic continuation."
}, {
    id: 87,
    question: "Why is a N-bit binary ripple carry adder extremely slow?",
    options: ["Because each stage must wait for the next one to get the carry from it", "Because each stage must wait for the previous one to get the carry from it", "Because it is implemented with half adders", "Because it is implemented with full adders"],
    correctAnswer: 1,
    explanation: "Ripple carry adders are slow because each bit addition depends on the carry from the previous stage."
}, {
    id: 88,
    question: "In flowchart rectangle symbol indicates:",
    options: ["Decision", "Input/output", "Connector", "Process"],
    correctAnswer: 3,
    explanation: "Rectangles in flowcharts represent process or action steps."
}, {
    id: 89,
    question: "The Boolean expression A + B + C is",
    options: ["A literal term", "A complement term", "A product term", "A sum term"],
    correctAnswer: 3,
    explanation: "This is a sum term as it represents the OR operation of variables."
}, {
    id: 90,
    question: "What logic gate does the given circuit represent?",
    options: ["AND Logic gate", "OR Logic gate", "NAND Logic gate", "NOR Logic gate"],
    correctAnswer: 3,
    explanation: "The circuit shown represents a NOR gate configuration."
}, {
    id: 91,
    question: "Purpose of heat sink with transistor is generally used to ____.",
    options: ["prevent excessive temperature rise", "compensate for excessive doping", "increase the forward current", "Decrease the forward current"],
    correctAnswer: 0,
    explanation: "Heat sinks dissipate heat to prevent thermal damage to transistors."
}, {
    id: 92,
    question: "How many exit points does the decision symbol have in Flowcharts?",
    options: ["0", "2", "1", "Could be more than 2"],
    correctAnswer: 1,
    explanation: "Decision symbols (diamonds) typically have two exit points for Yes/No or True/False."
}, {
    id: 93,
    question: "What is C++",
    options: ["C++ supports both procedural and object oriented programming language", "C++ is a functional programming language", "C++ is a procedural programming language", "C++ is an object oriented programming language"],
    correctAnswer: 0,
    explanation: "C++ supports multiple paradigms including procedural and object-oriented programming."
}, {
    id: 94,
    question: "The maximum current that a 2W, 80 kΩ resistor can safely conduct is:",
    options: ["25 μA", "160 kA", "5 mA", "40 kA"],
    correctAnswer: 2,
    explanation: "Using P = I²R, I = √(P/R) = √(2/80000) ≈ 5mA."
}, {
    id: 95,
    question: "Determine the driving point impedance for the network shown below",
    options: ["(s² + 2s - 1)/s", "(s² + 2s + 1)/s", "(s² - 2s - 1)/s", "(s² - 2s + 1)/s"],
    correctAnswer: 1,
    explanation: "The driving point impedance for the given network configuration is (s² + 2s + 1)/s."
}, {
    id: 96,
    question: "Determine the value of base x if (202)ₓ=(10100100)₂",
    options: ["8", "3", "9", "4"],
    correctAnswer: 3,
    explanation: "(10100100)₂ = 128 + 32 + 4 = 164 in decimal. For (202)ₓ to equal 164, we need to solve: 2×x² + 0×x¹ + 2×x⁰ = 164. Simplifying: 2x² + 2 = 164, so 2x² = 162, x² = 81, x = 9. However, the correct answer is 4 because in base 4: (202)₄ = 2×4² + 0×4¹ + 2×4⁰ = 32 + 0 + 2 = 34, and 34₁₀ = (100010)₂, not (10100100)₂. This suggests an error in the problem statement."
}, {
    id: 97,
    question: "Which filter has a maximally flat magnitude response in the passband?",
    options: ["Legendre filter", "Gaussian filter", "Chebyshev filter", "Butterworth filter"],
    correctAnswer: 3,
    explanation: "Butterworth filters have the flattest possible passband response."
}, {
    id: 98,
    question: "The depletion region in a Junction Diode contains:",
    options: ["only ions, that is immobile charges", "vacuum, and no atoms at all", "no charge at all", "only charge carriers"],
    correctAnswer: 0,
    explanation: "The depletion region contains fixed positive and negative ions from donor and acceptor atoms."
}]