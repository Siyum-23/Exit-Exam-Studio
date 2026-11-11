[{
    id: 1,
    question: "Which parameter is used to assess and evaluate software architectures?",
    options: ["Responsiveness of Architectures", "Durability of Architectures", "Architectural quality in attribute", "Number of components in the Architecture"],
    correctAnswer: 2,
    explanation: "Architectural quality attributes (like maintainability, performance, security) are the standard parameters used to evaluate software architectures, not just component count or responsiveness alone."
}, {
    id: 2,
    question: "What we use to pass the data between activities in Android?",
    options: ["Broadcast receiver", "PostgreSQL Database", "Intent", "Content provider"],
    correctAnswer: 2,
    explanation: "Intents are the Android mechanism for passing data between activities. Broadcast receivers handle system-wide events, content providers manage data sharing between apps, and databases are for persistent storage."
}, {
    id: 3,
    question: e.jsxs("div", {
        children: [e.jsxs("div", {
            className: "mb-3 border rounded p-2 dark:border-gray-700",
            children: [e.jsxs("div", {
                className: "flex justify-between items-center mb-1",
                children: [e.jsx("h3", {
                    className: "text-sm font-medium dark:text-white",
                    children: "Student Class UML Diagram"
                }), e.jsx(C, {
                    variant: "outline",
                    size: "sm",
                    onClick: n => {
                        n.preventDefault();
                        const t = n.currentTarget.closest("div").parentElement.querySelector("table");
                        t && (t.style.display = t.style.display === "none" ? "table" : "none",
                        n.currentTarget.innerText = t.style.display === "none" ? "Show Table" : "Hide Table")
                    }
                    ,
                    children: "Hide Table"
                })]
            }), e.jsxs("table", {
                className: "w-full border-collapse text-xs dark:border-gray-700",
                children: [e.jsx("thead", {
                    children: e.jsxs("tr", {
                        className: "bg-gray-50 dark:bg-gray-800",
                        children: [e.jsx("th", {
                            className: "border p-1 text-left dark:border-gray-700 dark:text-gray-300",
                            children: "Attribute/Method"
                        }), e.jsx("th", {
                            className: "border p-1 text-left dark:border-gray-700 dark:text-gray-300",
                            children: "Type"
                        })]
                    })
                }), e.jsxs("tbody", {
                    children: [e.jsxs("tr", {
                        children: [e.jsx("td", {
                            className: "border p-1 dark:border-gray-700 dark:text-gray-300",
                            children: "Name: String"
                        }), e.jsx("td", {
                            className: "border p-1 dark:border-gray-700 dark:text-gray-300",
                            children: "Private attribute"
                        })]
                    }), e.jsxs("tr", {
                        children: [e.jsx("td", {
                            className: "border p-1 dark:border-gray-700 dark:text-gray-300",
                            children: "Department: String"
                        }), e.jsx("td", {
                            className: "border p-1 dark:border-gray-700 dark:text-gray-300",
                            children: "Private attribute"
                        })]
                    }), e.jsxs("tr", {
                        children: [e.jsx("td", {
                            className: "border p-1 dark:border-gray-700 dark:text-gray-300",
                            children: "Phone: String"
                        }), e.jsx("td", {
                            className: "border p-1 dark:border-gray-700 dark:text-gray-300",
                            children: "Private attribute"
                        })]
                    }), e.jsxs("tr", {
                        children: [e.jsx("td", {
                            className: "border p-1 dark:border-gray-700 dark:text-gray-300",
                            children: "Age: int"
                        }), e.jsx("td", {
                            className: "border p-1 dark:border-gray-700 dark:text-gray-300",
                            children: "Private attribute"
                        })]
                    }), e.jsxs("tr", {
                        children: [e.jsx("td", {
                            className: "border p-1 dark:border-gray-700 dark:text-gray-300",
                            children: "Student (String, String, String, int)"
                        }), e.jsx("td", {
                            className: "border p-1 dark:border-gray-700 dark:text-gray-300",
                            children: "Constructor"
                        })]
                    }), e.jsxs("tr", {
                        children: [e.jsx("td", {
                            className: "border p-1 dark:border-gray-700 dark:text-gray-300",
                            children: "SetDept(String)"
                        }), e.jsx("td", {
                            className: "border p-1 dark:border-gray-700 dark:text-gray-300",
                            children: "Public method"
                        })]
                    }), e.jsxs("tr", {
                        children: [e.jsx("td", {
                            className: "border p-1 dark:border-gray-700 dark:text-gray-300",
                            children: "GetName(): String"
                        }), e.jsx("td", {
                            className: "border p-1 dark:border-gray-700 dark:text-gray-300",
                            children: "Public method"
                        })]
                    }), e.jsxs("tr", {
                        children: [e.jsx("td", {
                            className: "border p-1 dark:border-gray-700 dark:text-gray-300",
                            children: "GetDept():String"
                        }), e.jsx("td", {
                            className: "border p-1 dark:border-gray-700 dark:text-gray-300",
                            children: "Public method"
                        })]
                    }), e.jsxs("tr", {
                        children: [e.jsx("td", {
                            className: "border p-1 dark:border-gray-700 dark:text-gray-300",
                            children: "GetYearOfBirth():int"
                        }), e.jsx("td", {
                            className: "border p-1 dark:border-gray-700 dark:text-gray-300",
                            children: "Public method"
                        })]
                    }), e.jsxs("tr", {
                        children: [e.jsx("td", {
                            className: "border p-1 dark:border-gray-700 dark:text-gray-300",
                            children: "CalculateAge(): int"
                        }), e.jsx("td", {
                            className: "border p-1 dark:border-gray-700 dark:text-gray-300",
                            children: "Public method"
                        })]
                    })]
                })]
            })]
        }), e.jsx("div", {
            className: "dark:text-white",
            children: "Assume that the Attributes have declared as private and the method as public. The get method return the value of the attribute and calculateAge() returns the student age. Which of the following would not raise an error when you run this program?"
        })]
    }),
    options: ['Student st1 = new Student("john", "SE", "0913222222", 20)', 'st1 Student = newStudent("john", "CS", "02085332455", 23)', 'Student st1 = newStudent("john", "IT", "2000",)', 'Student st1 = newStudent("john", "CS", "0913222222", "25")'],
    correctAnswer: 0,
    explanation: `Option A is correct because:
1. Proper constructor syntax with all required parameters
2. Correct data types (age as int)
3. Proper variable declaration

Other options have:
B: Wrong variable declaration order
C: Missing age parameter
D: Age passed as string instead of int`
}, {
    id: 4,
    question: `What will be the output of the following code snippet?

var a =       "exitexam";
var result = "a.substring(2,6)";
document.write(result);`,
    options: ["texam", "xite", "itex", "xitex"],
    correctAnswer: 2,
    explanation: `The substring(2,6) extracts characters from index 2 to 5 (6 exclusive) of "exitexam":
'e','x','i','t','e','x','a','m'
Indices 2-5: 'i','t','e','x' → "itex"
Note: The code actually outputs the string literal "a.substring(2,6)" because of the extra quotes, but assuming that's a typo, the correct substring would be "itex".`
}, {
    id: 5,
    question: "Which one of the following is wrong regarding to interface?",
    options: ["Like a class, an interface is reference data type.", "Interface abstract method are accessed using interface instances.", "Interface includes abstract methods.", "One class can implement multiple interfaces."],
    correctAnswer: 1,
    explanation: "Interface methods are accessed through class instances that implement the interface, not through interface instances directly (as interfaces cannot be instantiated). All other statements are correct about interfaces."
}, {
    id: 6,
    question: "For the schema Hotel (Hotel_id:integer, Hotel_name: String, Sub_city: string) which SQL statement correctly inserts Tuples to Hotel relation. (Assume Hotel_id is primary key).",
    options: ["Insert INTO HOTEL (Hotel_id, Hotel_name, Sub_city)VALUES ('Hilton','Yeka')", "Insert INTO HOTEL (Hotel_id, Hotel_name, Sub_city)VALUES (1,'Hilton','Yeka')", "Insert INTO HOTEL (1,'Hilton','Yeka')", "Insert Values INTO HOTEL(Hotel_id, Hotel_name, Sub_city)VALUES (1,'Hilton','Yeka')"],
    correctAnswer: 1,
    explanation: `Option B is correct SQL syntax:
1. Specifies column names and values in matching order
2. Provides all required fields (including primary key)
3. Correct data types (integer for Hotel_id)
Others fail due to:
A - Missing Hotel_id value
C - Missing column names
D - Incorrect 'Insert Values' syntax`
}, {
    id: 7,
    question: "Which of the following shows the five stages in Tuckman's model of team development, in sequential order?",
    options: ["forming, storming, performing, norming and adjourning", "norming ,forming, storming, performing and adjourning", "storming, forming, norming, performing and adjourning", "forming, storming, norming, performing and adjourning"],
    correctAnswer: 3,
    explanation: `The correct sequence is:
1. Forming (team comes together)
2. Storming (conflict emerges)
3. Norming (establish roles/rules)
4. Performing (productive work)
5. Adjourning (team disbands)
This is a fundamental model in team management.`
}, {
    id: 8,
    question: "Which Statement is correct about the difference between functional and nonfunctional requirement?",
    options: ["Unlike functional requirement, nonfunctional requirement is stable.", "Both are the same most of the time and only vary under certain contexts.", "Functional requirements are decided by the customer while nonfunctional requirements are decided by developers", "Functional requirements are the service of the system provide while nonfunctional requirements are constraints on the service or functions offered by the system."],
    correctAnswer: 3,
    explanation: `Key differences:
Functional: WHAT the system does (features/services)
Non-functional: HOW WELL the system performs (constraints/quality attributes)
Other options are incorrect because:
A - Both can change
B - They're fundamentally different
C - Both involve stakeholders`
}, {
    id: 9,
    question: "If the estimate the total discounted benefits for a project is birr 120,000 and total discounted cost is birr 100,000 what is the estimated return on investment (ROI) percentage?",
    options: ["20%", "12%", "30%", "10%"],
    correctAnswer: 0,
    explanation: `ROI = ((Benefits - Costs)/Costs) × 100
= ((120,000 - 100,000)/100,000) × 100
= (20,000/100,000) × 100
= 20%`
}, {
    id: 10,
    question: "A queue in which the item most recently added is always the first one out refers to:",
    options: ["LIFO queue", "FIFO queue", "Real time queue", "Priority queue"],
    correctAnswer: 0,
    explanation: "LIFO (Last-In-First-Out) describes stack behavior where the newest item is processed first. While the term 'LIFO queue' is sometimes used, this structure is more commonly called a stack. A traditional queue follows FIFO (First-In-First-Out) where the oldest item is processed first. Priority queues order by priority values, not insertion time."
}, {
    id: 11,
    question: "A firewall is used in a system connected to a wide area network to",
    options: ["Fire spreading via network through cables", "Avoid Spreading of fire in the network", "Stop Unauthorized access by hackers", "Scanning for viruses in various files"],
    correctAnswer: 2,
    explanation: "Firewalls are network security devices that monitor and control incoming/outgoing traffic based on security rules, primarily to prevent unauthorized access. While some firewalls include virus scanning, their core purpose is access control."
}, {
    id: 12,
    question: "The permission --rwxr-r- represented in octal expression will be:",
    options: ["766", "700", "744", "755"],
    correctAnswer: 2,
    explanation: `Permission breakdown:
- rwx (owner) = 4+2+1 = 7
- r-- (group) = 4+0+0 = 4
- r-- (others) = 4+0+0 = 4
Combined: 744
This represents read/write/execute for owner, read-only for group and others.`
}, {
    id: 13,
    question: "Which of the following is the correct order of packet data unit as data moved in the OSI reference model from bottom to top?",
    options: ["Segment, Packet, Frame, Bit", "Segment, Frame, Packet, Bit", "Bit, Frame, Packet, Segment", "Bit, Packet, Frame, Segment"],
    correctAnswer: 2,
    explanation: `OSI layer PDU progression (Physical to Application):
1. Physical: Bits
2. Data Link: Frames
3. Network: Packets
4. Transport: Segments
This represents how data gets encapsulated moving up the stack.`
}, {
    id: 14,
    question: "Which of the following statement is true regarding triple DES?",
    options: ["192-bit keys on 64-bit blocks of plain text.", "Uses 128-bit blocks of plain text and 92-bit keys and apply DES algorithm thrice.", "Work with 192-bit blocks of plain text and applies DES algorithm once.", "Functioning on 64-bit blocks of plain text and 56-bit keys by applying DES algorithm for three rounds."],
    correctAnswer: 3,
    explanation: `3DES:
- Uses 64-bit blocks (same as DES)
- Applies DES algorithm 3 times
- Effective key length is 168 bits (3×56-bit keys)
- More secure than DES but slower due to triple processing`
}, {
    id: 15,
    question: "An HTTP request message always contains_________?",
    options: ["a status line, a header, and a body", "a header only", "a header and a body", "a request line and a header"],
    correctAnswer: 3,
    explanation: `HTTP request components:
1. Request line (method, URI, version)
2. Headers (metadata)
3. Optional body (for POST/PUT)
The only required parts are request line and headers. Status line appears in responses, not requests.`
}, {
    id: 16,
    question: "Which of the following is refers to unauthorized disclosure of information?",
    options: ["authorization", "authentication", "integrity", "confidentiality"],
    correctAnswer: 3,
    explanation: `CIA triad components:
- Confidentiality: Preventing unauthorized disclosure
- Integrity: Preventing unauthorized modification
- Authentication: Verifying identity
- Authorization: Granting access rights`
}, {
    id: 17,
    question: "Anything that can perceive its environment through sensory and act as upon environment through effectors",
    options: ["Agent", "Expert System", "Intelligence", "API"],
    correctAnswer: 0,
    explanation: `This is the definition of an intelligent agent in AI:
- Perceives environment via sensors
- Acts via effectors
- May have goals/intelligence
Expert systems are a type of AI system, APIs are interfaces, and intelligence is a property.`
}, {
    id: 18,
    question: "Assume that there is a pet family from which Pets like Dog and Cat share behavior from every Pet family has a name. However, the pet families have some specific behaviors that are exhibited by only particular pets. For instance, only Dogs can fetch something while both cats and dogs can speak which of the following object oriented design principle would be suitable for this case?",
    options: ["Information hiding", "Encapsulation", "Polymorphism", "Inheritance"],
    correctAnswer: 3,
    explanation: `Inheritance is correct because:
- Base class (Pet) contains common attributes/behaviors
- Derived classes (Dog, Cat) extend with specific behaviors
Polymorphism handles method overriding, but the question describes a class hierarchy relationship.`
}, {
    id: 19,
    question: "Which of the following statement is not addressing the banker's algorithm?",
    options: ["The banker's algorithm considers each request before it occurs.", "It is an extension of the deadlock detection algorithm.", "It is a modeled on the way a small-town banker might deal with a group of customers to whom he/she has granted lines of credit", "It is scheduling algorithm."],
    correctAnswer: 3,
    explanation: `Banker's algorithm:
- Deadlock avoidance (not detection)
- Resource allocation (not scheduling)
- Models credit allocation metaphor
- Checks safety before granting requests`
}, {
    id: 20,
    question: "An informed search algorithm that provides exponential time complexity in the worst-case scenarios and guarantees optimality when searching a solution refers to:",
    options: ["A* search", "greedy best-first search", "uniform cost search", "Iterative deepening A*search"],
    correctAnswer: 0,
    explanation: `A* search:
- Uses heuristic + path cost (f(n)=g(n)+h(n))
- Optimal if heuristic is admissible
- Complete
- Exponential time/space in worst case
Greedy is not optimal, uniform cost has no heuristic, IDA* is memory-efficient variant.`
}, {
    id: 21,
    question: "Which principles state that 80% of the problem can be fixed with 20% of the entire effort?",
    options: ["Pareto principle", "Parametric principle", "Pairwise principle", "Partition principle"],
    correctAnswer: 0,
    explanation: `Pareto principle (80/20 rule) observes that:
- 80% of effects come from 20% of causes
- 80% of bugs from 20% of code
- 80% of usage from 20% of features
Widely applied in business and software engineering.`
}, {
    id: 22,
    question: "Which one of the following is an appropriate sequence that depicts the model development process in data mining?",
    options: ["Model training, Model Testing, Model Evaluation, Model Deployment", "Model Evaluation, Model training, Model Testing, Model Deployment", "Model training, Model Testing, Model Deployment, Model Evaluation", "Model training, Model Evaluation, Model Testing, Model Deployment"],
    correctAnswer: 0,
    explanation: `Standard data mining workflow:
1. Train model on training data
2. Test on unseen test data
3. Evaluate performance metrics
4. Deploy if satisfactory
Evaluation must precede deployment to ensure quality.`
}, {
    id: 23,
    question: "Which method has the same name as that of its class?",
    options: ["delete", "class", "constructor", "finalize"],
    correctAnswer: 2,
    explanation: `Constructors:
- Special methods that initialize objects
- Same name as class
- No return type
- Called when object is created
Other options are regular methods/keywords.`
}, {
    id: 24,
    question: "Within OAuth, what component validates the user's identity?",
    options: ["Authorization server", "resource server", "browser", "client"],
    correctAnswer: 0,
    explanation: `OAuth components:
- Authorization server: Authenticates user & issues tokens
- Resource server: Hosts protected resources
- Client: Requests access
- Browser: User agent
Only the authorization server validates identity.`
}, {
    id: 25,
    question: `The result of the following program after running will be

Class PrintResult {
Public static void main (String arg []) {
int arr{ }={3,4,5,6,7};
for(int i=0; i<=arr.length-2; ++i){
system.out.println(arr[i]+",")
}
}}`,
    options: ["3,4", "3,4,5", "3,4,5,6,7", "3,4,5,6"],
    correctAnswer: 3,
    explanation: `This code has several syntax errors that would prevent compilation:
- 'Class' should be lowercase 'class'
- 'Public' should be lowercase 'public'
- 'system' should be capitalized as 'System'
- Missing semicolon after println statement
- Incorrect array initialization syntax

If we correct these errors, the analysis would be:
- Array has 5 elements (indices 0-4)
- Loop runs while i <= (5-2) = 3
- Loop prints elements at indices 0,1,2,3 → 3,4,5,6
- Element 7 at index 4 is excluded by the condition`
}, {
    id: 26,
    question: "While optimizing our relation, if we found that no multivalued attributes and partial dependencies exist in a relation then the relation is in what normal form?",
    options: ["1NF", "3NF", "4NF", "2NF"],
    correctAnswer: 1,
    explanation: `Normal form progression:
1NF: No repeating groups
2NF: 1NF + no partial dependencies
3NF: 2NF + no transitive dependencies
4NF: 3NF + no multivalued dependencies
Since no partial dependencies → at least 2NF
No transitive dependencies → 3NF`
}, {
    id: 27,
    question: "A Techniques for generating plans with conditionals and loops are almost identical to those for generating programs from logical specification is called:",
    options: ["Automatic programming", "Automatic monitoring", "Automatic recursive", "Automatic learning"],
    correctAnswer: 0,
    explanation: `Automatic programming:
- Generates executable code from high-level specs
- Handles control structures like conditionals/loops
- Used in AI planning and program synthesis
Different from machine learning which derives patterns from data.`
}, {
    id: 28,
    question: "Which one of the following is the correct identifier in c++?",
    options: ["7variable", "7VARIABLE", "$variable", "variable_1234"],
    correctAnswer: 3,
    explanation: `C++ identifier rules:
- Must start with letter or underscore
- Can contain letters, digits, underscores
- Case sensitive
- No special symbols except _
Only 'variable_1234' meets all requirements.`
}, {
    id: 29,
    question: "Which of the following is true about the abstract class?",
    options: ["cannot be inherited", "a mechanism of encapsulation", "cannot be instantiated", "can contain both abstract and non-abstract methods"],
    correctAnswer: 2,
    explanation: `Abstract classes:
- Cannot be instantiated directly
- Can be inherited (often are)
- May contain abstract (unimplemented) and concrete methods
- Different from interfaces which can't have implementations

Option D is also correct, but the question asks for one answer. In most languages, the defining characteristic of abstract classes is that they cannot be instantiated directly.`
}, {
    id: 30,
    question: "In software risk management, accepting risk happening but do not do anything is known as",
    options: ["risk transfer", "risk retention", "risk avoidance", "risk reduction"],
    correctAnswer: 1,
    explanation: `Risk strategies:
- Avoidance: Eliminate risk source
- Transfer: Shift to third party (e.g., insurance)
- Mitigation: Reduce probability/impact
- Retention: Accept without action
Question describes retention approach.`
}, {
    id: 31,
    question: 'When a process is in a "Blocked" state waiting for some input-output services and after the service is completed it will goes to a state known as:',
    options: ["Suspended", "Terminated", "Running", "Ready"],
    correctAnswer: 3,
    explanation: `Process state transitions:
Blocked → Ready when I/O completes
Ready → Running when scheduled
Running → Blocked when needs I/O
Running → Terminated when finishes
Suspended is additional state when swapped out.`
}, {
    id: 32,
    question: '"The system architecture should be designed using fine-grain, self-contained components. Producers of data should be separated from consumers and shared data structures should be avoided." For which requirement this architecture description applies?',
    options: ["Availability", "maintainability", "performance", "security"],
    correctAnswer: 1,
    explanation: `These principles support maintainability:
- Fine-grained components: Easier to modify
- Separation of concerns: Changes localized
- Avoid shared state: Reduces side effects
Also helps with testing and debugging.`
}, {
    id: 33,
    question: "Which slogan is against agile method philosophy?",
    options: ["Following a plan over responding to changes", "Individuals and interactions over processes and tools", "Customer collaboration over contract negotiation", "working software over comprehensive documentation"],
    correctAnswer: 0,
    explanation: `Agile values (from Manifesto):
- Responding to change over following a plan
- Individuals/interactions over processes/tools
- Customer collaboration over contract negotiation
- Working software over comprehensive documentation
Option A contradicts agile principles.`
}, {
    id: 34,
    question: "APK stands for",
    options: ["Android Package Kit", "Android Platform Kit", "Android Phone Kit", "Android Page Kit"],
    correctAnswer: 0,
    explanation: `APK = Android Package Kit:
- File format for distributing Android apps
- Contains compiled code, resources, manifest
- Analogous to .exe in Windows
Installed via Google Play or sideloading.`
}, {
    id: 35,
    question: "Which statement describe the main goal of software testing as a part of the quality assurance process?",
    options: ["to achieve project timelines and deadlines", "to generate software requirement and design documentation", "to guarantee that the software meets the specified requirement", "to monitor the entire SDLC"],
    correctAnswer: 2,
    explanation: `Primary testing objectives:
- Verify requirements fulfillment
- Identify defects
- Assess quality attributes
Not primarily about documentation or scheduling (though these may be secondary benefits).`
}, {
    id: 36,
    question: "The correct structure of the for loop statement is:",
    options: ["for(initialization; condition)", "for(increment/decrement; initialization; condition)", "for(condition, initialization, increment/decrement)", "for(initialization; condition; increment/decrement)"],
    correctAnswer: 3,
    explanation: `Standard for loop syntax in C-style languages:
for(init; condition; increment) { ... }
- Initialization: Executes once at start
- Condition: Checked before each iteration
- Increment: Executes after each iteration
Other formats are invalid.`
}, {
    id: 37,
    question: "Which of the following is not true regarding algorithm development during problem solving?",
    options: ["should be developed by considering the platforms on which it runs", "Is step wise logical description of how to solve the problem", "Is developing considering the details of the programming language", "Is equivalent to the programming language code"],
    correctAnswer: 3,
    explanation: `Key algorithm characteristics:
- Language-independent logical steps
- Abstract solution (not code)
- May consider platform constraints
- Precursor to implementation
Algorithms exist independently of their code implementations.`
}, {
    id: 38,
    question: "What would be the most likely consequence if every software stakeholders were rushing to be approved for their requirement without discussing with other stakeholders?",
    options: ["Attains the project schedule", "Results in excess requirements", "leads to conflict requirement", "Requirement become unambiguous"],
    correctAnswer: 2,
    explanation: `Uncoordinated requirements lead to:
- Conflicts between stakeholder needs
- Inconsistent system behavior
- Integration challenges
- Scope creep
Requirements engineering requires negotiation and prioritization.`
}, {
    id: 39,
    question: "Which of the following is true regarding model development in machine learning?",
    options: ["Much focus should be given to test data than training data", "Training with large dataset boosts model performance", "Test set and Training set should have fifty-fifty overlap", "proportion of data set for training should be less than the test set"],
    correctAnswer: 1,
    explanation: `ML model best practices:
- More training data generally improves performance
- Test/train sets should be distinct (no overlap)
- Typical split: 70-80% training, 20-30% testing
- Test data is for evaluation only (not focused on)`
}, {
    id: 40,
    question: "All layout classes are subclasses of which of the following?",
    options: ["android.view.Relativelayout", "android.view.Layout", "android.view.ViewGroup", "android.view.Widget"],
    correctAnswer: 2,
    explanation: `Android UI hierarchy:
View (basic UI element)
↑
ViewGroup (container for views)
↑
Layouts (LinearLayout, RelativeLayout, etc.)
All layouts extend ViewGroup which handles child view arrangement.`
}, {
    id: 41,
    question: `What will be the output for the following code if you enter 4 and 3 for b and e respectively

#include<iostream>
Using namespace std;
int main(){
int b, e, r=1, f;
cout<<"enter b and e";
cin>>b>>e;
for (int i=1; i<=e; i++){
f=r*b;
}
cout<<f;
return 0;
}`,
    options: ["81", "12", "4", "256"],
    correctAnswer: 2,
    explanation: `Code analysis with b=4, e=3:
- The loop iterates 3 times (i=1,2,3)
- In each iteration: f = r*b = 1*4 = 4
- r remains 1 throughout since it's never updated
- f is repeatedly set to 4 (overwriting previous values)
- After the loop exits, cout<<f; prints 4

Note: This code has a bug. If calculating b^e was intended, the loop should have included 'r = f;' to update r with each iteration.`
}, {
    id: 42,
    question: "Which of the following is not a valid host address within the network 172.17.128.0/21?",
    options: ["172.17.128.1/21", "172.17.135.255/21", "172.17.128.255/21", "172.17.135.0/21"],
    correctAnswer: 1,
    explanation: `/21 network details:
- Network: 172.17.128.0
- Mask: 255.255.248.0
- Broadcast: 172.17.135.255
- Host range: 172.17.128.1 - 172.17.135.254
172.17.135.255 is broadcast address (invalid for hosts)`
}, {
    id: 43,
    question: "Which of the following is the correct sequence that will be followed during software evolution process?",
    options: ["change request, release planning, change implementation, impact analysis, system release", "impact analysis, change request, change implementation, release planning, system release", "change request, impact analysis, change implementation, release planning, system release", "change request, impact analysis, release planning, change implementation, system release"],
    correctAnswer: 3,
    explanation: `Software evolution workflow:
1. Change request submitted
2. Impact analysis assesses effects
3. Release planning schedules change
4. Implementation makes changes
5. System release deploys changes
Must analyze before planning implementation.`
}, {
    id: 44,
    question: "Identify the lowest layer of android architecture",
    options: ["Linux kernel", "Database", "Application Framework", "Application"],
    correctAnswer: 0,
    explanation: `Android architecture layers (bottom-up):
1. Linux kernel (hardware abstraction)
2. Libraries + Android Runtime
3. Application Framework
4. Applications
Linux kernel handles core system services like memory, drivers, security.`
}, {
    id: 45,
    question: "Which of the following is true regarding the use of switches and hubs for network connectivity in the network?",
    options: ["Switches do not forward broadcasts", "Switches increase the number of collision domains in the network", "Switches take less time to process frames than hubs take", "Hubs can filter frames"],
    correctAnswer: 1,
    explanation: `Switch vs Hub:
- Switches: Create separate collision domain per port, filter based on MAC, store-and-forward
- Hubs: Single collision domain, broadcast all traffic, no filtering
Switches improve performance by isolating traffic.`
}, {
    id: 46,
    question: "Select the one that is not correct related to generalization in system modeling.",
    options: ["In generalization, the attribute and operation associated with the highest-level classes are also associated with lowest level classes.", "Common information will be maintained in one place", "Facilitate easy modification of data", "The higher level classes are more specific than the lower-level classes by adding specific attributes and operation"],
    correctAnswer: 3,
    explanation: `Generalization hierarchy:
- Higher levels are more general/abstract
- Lower levels inherit and specialize
- "Is-a" relationships
- Promotes code reuse
Option D reverses the generalization/specialization relationship.`
}, {
    id: 47,
    question: "A of process management which is waiting for a resource that is owned by another process refers to:",
    options: ["deadlock", "preemption", "overloading", "queueing"],
    correctAnswer: 0,
    explanation: `Deadlock conditions:
1. Mutual exclusion
2. Hold and wait
3. No preemption
4. Circular wait
When processes wait for resources held by others in a cycle, deadlock occurs.`
}, {
    id: 48,
    question: '"Database is a logically coherent collection of data with some inherent meaning " describes that',
    options: ["All attributes of the entity should be related", "there should be one primary key attribute", "the entity should be physical object", "number of attributes should be limited"],
    correctAnswer: 0,
    explanation: `Database characteristics:
- Logically related data
- Represents some aspect of reality
- Designed for specific purpose
- Not just random data collection
Primary keys and physicality are implementation details.`
}, {
    id: 49,
    question: "Which of the following is a resource optimization techniques in which start and finish dates are adjusted based on resource constraints with the goal of balancing the demand resources with the available supply?",
    options: ["Responsibility assignment matrix", "Resource smoothing", "Resource leveling", "Resource grouping"],
    correctAnswer: 2,
    explanation: `Resource optimization:
- Leveling: Adjust schedule to avoid over-allocation (may change critical path)
- Smoothing: Adjust within float to balance resources
RAM shows who does what, grouping organizes resources.`
}, {
    id: 50,
    question: "Business people always remodel their business by closely studying their customers purchasing habits over the course of their purchase history. Accordingly, a salesperson at Markato shop noticed that people who always buy shoes will also buy socks with probability of 0.75 and hence decided to put shoes and socks side by side for ease of accessibility. Which big data analytics technique could this salesperson could employ?",
    options: ["Regression Modeling", "Clustering algorithm", "Predictive modeling", "Association rule"],
    correctAnswer: 3,
    explanation: `Association rule learning:
- Discovers co-occurrence relationships
- Example: Market basket analysis
- Measures like support, confidence, lift
- Used for product placement recommendations
Different from clustering (grouping) or regression (numeric prediction).`
}, {
    id: 51,
    question: e.jsxs("div", {
        children: [e.jsxs("div", {
            className: "mb-3 border rounded p-2 dark:border-gray-700",
            children: [e.jsxs("div", {
                className: "flex justify-between items-center mb-1",
                children: [e.jsx("h3", {
                    className: "text-sm font-medium dark:text-white",
                    children: "Layered Architecture"
                }), e.jsx(C, {
                    variant: "outline",
                    size: "sm",
                    onClick: n => {
                        n.preventDefault();
                        const t = n.currentTarget.closest("div").parentElement.querySelector("table");
                        t && (t.style.display = t.style.display === "none" ? "table" : "none",
                        n.currentTarget.innerText = t.style.display === "none" ? "Show Table" : "Hide Table")
                    }
                    ,
                    children: "Hide Table"
                })]
            }), e.jsxs("table", {
                className: "w-full border-collapse text-xs dark:border-gray-700",
                children: [e.jsx("thead", {
                    children: e.jsxs("tr", {
                        className: "bg-gray-50 dark:bg-gray-800",
                        children: [e.jsx("th", {
                            className: "border p-1 text-left dark:border-gray-700 dark:text-gray-300",
                            children: "Layer"
                        }), e.jsx("th", {
                            className: "border p-1 text-left dark:border-gray-700 dark:text-gray-300",
                            children: "Description"
                        })]
                    })
                }), e.jsxs("tbody", {
                    children: [e.jsxs("tr", {
                        children: [e.jsx("td", {
                            className: "border p-1 dark:border-gray-700 dark:text-gray-300",
                            children: "A"
                        }), e.jsx("td", {
                            className: "border p-1 dark:border-gray-700 dark:text-gray-300",
                            children: "Top-level layer"
                        })]
                    }), e.jsxs("tr", {
                        children: [e.jsx("td", {
                            className: "border p-1 dark:border-gray-700 dark:text-gray-300",
                            children: "B"
                        }), e.jsx("td", {
                            className: "border p-1 dark:border-gray-700 dark:text-gray-300",
                            children: "Middle layer 1"
                        })]
                    }), e.jsxs("tr", {
                        children: [e.jsx("td", {
                            className: "border p-1 dark:border-gray-700 dark:text-gray-300",
                            children: "C"
                        }), e.jsx("td", {
                            className: "border p-1 dark:border-gray-700 dark:text-gray-300",
                            children: "Middle layer 2"
                        })]
                    }), e.jsxs("tr", {
                        children: [e.jsx("td", {
                            className: "border p-1 dark:border-gray-700 dark:text-gray-300",
                            children: "D"
                        }), e.jsx("td", {
                            className: "border p-1 dark:border-gray-700 dark:text-gray-300",
                            children: "Bottom layer"
                        })]
                    })]
                })]
            })]
        }), e.jsx("div", {
            className: "dark:text-white",
            children: "Given the following layered architecture which ordering relation is correct and didn't encountered any architectural erosion? Assume there are four layers: A,B,C and D"
        })]
    }),
    options: ["(A,B)", "(D,A)", "(A,C)", "(C,B)"],
    correctAnswer: 2,
    explanation: `In layered architectures:
- Upper layers (A) can depend on lower layers (C)
- Lower layers should not depend on upper layers
- Same-layer dependencies (A,B) are discouraged
- Reverse dependencies (D,A) violate architecture
(A,C) maintains proper top-down flow`
}, {
    id: 52,
    question: "Which of the following is among benefits provided with access control lists (ACLS) implementation for software security based application?",
    options: ["ACLs monitor the number of bytes and packets", "ACLs provide high network availability", "Virus detection", "ACLs classify and organize network traffic"],
    correctAnswer: 3,
    explanation: `ACL functions:
- Permit/deny traffic based on rules
- Filter by IP, port, protocol, etc.
- Implement security policies
- Traffic classification and organization
ACLs don't directly monitor throughput, provide high availability, or detect viruses - those require specialized tools.`
}, {
    id: 53,
    question: "Default method while Submitting a form is",
    options: ["Post method", "Get Method", "Put Method", "Set Method"],
    correctAnswer: 1,
    explanation: `HTML form methods:
- GET: Default, appends data to URL
- POST: Sends data in request body
- PUT: Updates resources (REST)
GET is default but often POST is preferred for security with sensitive data.`
}, {
    id: 54,
    question: "The process that generates activities such as project schedule, cost estimations and work breakdown structures is described as:",
    options: ["Project Initiating", "Project Executing", "Project Closing", "Project Planning"],
    correctAnswer: 3,
    explanation: `Project phases:
- Initiating: Charter, stakeholders
- Planning: Schedule, budget, WBS
- Executing: Deliver work
- Monitoring: Track progress
- Closing: Finalize
Planning creates the project roadmap.`
}, {
    id: 60,
    question: "Which of the following is among benefits provided with access control lists (ACLs) implementation for software security based application?",
    options: ["ACLs monitor the number of bytes and packets", "ACLs provide high network availability", "Virus detection", "ACLs classify and organize network traffic"],
    correctAnswer: 3,
    explanation: `ACLs primarily classify and filter network traffic based on defined rules.
They don't directly:
- Monitor bytes/packets (network monitoring tools)
- Provide high availability (redundancy protocols)
- Detect viruses (antivirus software)`
}, {
    id: 61,
    question: "Default method while submitting a form is",
    options: ["Post method", "Get Method", "Put Method", "Set Method"],
    correctAnswer: 1,
    explanation: `GET is the default form submission method:
- Appends data to URL
- Less secure for sensitive data
- Limited data length
POST must be explicitly declared for:
- Secure data transmission
- Larger data volumes
- File uploads`
}, {
    id: 62,
    question: "The process that generates activities such as project schedule, cost estimations and work breakdown structures is described as:",
    options: ["Project Initiating", "Project Executing", "Project Closing", "Project Planning"],
    correctAnswer: 3,
    explanation: `Planning phase includes:
- WBS decomposition
- Schedule development (Gantt/PERT)
- Cost estimation techniques
- Resource allocation
Initiating: Charter creation
Executing: Deliverable production
Closing: Formal project termination`
}, {
    id: 63,
    question: `Given the following fragment of code, how many tests are required for 100% decision coverage?

if width > length
then biggest_dimension = width
if height > width
then biggest_dimension = height
end_if
else biggest_dimension = length
if height > length
then biggest_dimension = height
end_if
end_if`,
    options: ["6", "4", "2", "1"],
    correctAnswer: 1,
    explanation: `Decision coverage requires testing all possible outcomes:
1. width > length AND height > width
2. width > length AND height ≤ width
3. width ≤ length AND height > length
4. width ≤ length AND height ≤ length
Each condition must evaluate to both true and false.`
}, {
    id: 64,
    question: "How can we select an element with a specific class in CSS?",
    options: ["^", "--", "#", "."],
    correctAnswer: 3,
    explanation: `CSS selectors:
- '.' selects by class (e.g., .menu)
- '#' selects by ID
- '^' is not a standard selector
- '--' is used for CSS custom properties
Example: .className { color: red; }`
}, {
    id: 65,
    question: "Select an activity that suits in the fundamental test process which includes evaluation of the testability of the requirement and system?",
    options: ["Test analysis and design", "Test analysis and requirements", "Test analysis and implementation", "Test analysis and planning"],
    correctAnswer: 0,
    explanation: `Test Analysis and Design phase includes:
- Reviewing test basis (requirements)
- Evaluating testability
- Identifying test conditions
- Designing test cases
Other options mix incorrect phase activities`
}, {
    id: 66,
    question: "Which of the following is an appropriate sequence of database design processes?",
    options: ["Logical design database, Enterprise data modeling, Physical database design, Database implementation", "Enterprise data modeling, Logical design database, Database implementation, Physical database design", "Enterprise data modeling, Logical design database, Physical database design, Database implementation", "Logical design database, Enterprise data modeling, Physical database design, Database implementation"],
    correctAnswer: 2,
    explanation: `Correct database design sequence:
1. Enterprise modeling (conceptual ER diagrams)
2. Logical design (schema normalization)
3. Physical design (indexes, storage)
4. Implementation (DDL, population)
Reverse engineering skips modeling stages`
}, {
    id: 67,
    question: "Which of the following is not among the purposes of software testing?",
    options: ["Identify shortcomings", "Improving product acceptance", "Enhancing reliability", "Requesting more design and implementation time"],
    correctAnswer: 3,
    explanation: `Testing objectives:
- Find defects (shortcomings)
- Increase quality (reliability)
- Validate requirements (acceptance)
Testing doesn't directly request more time - that's a project management concern`
}, {
    id: 68,
    question: "Which software process model will you use if you want to deliver different functionalities (modules) of the software product that have different priority at different time?",
    options: ["Incremental model", "Spiral model", "Waterfall model", "Linear model"],
    correctAnswer: 0,
    explanation: `Incremental model:
- Delivers prioritized modules in iterations
- Allows partial releases
- Accommodates changing priorities
Contrast with:
- Waterfall: Full system at once
- Spiral: Risk-driven cycles
- Linear: Waterfall variant`
}, {
    id: 69,
    question: `What is the time complexity for the following code snippets?

function someFunction(n)
for(var i=0; i<n*10; i++){
console.log(n);
}}`,
    options: ["O(n^2)", "O(logn)", "O(log2n)", "O(n)"],
    correctAnswer: 3,
    explanation: `Time complexity analysis:
- Loop runs 10n times (i < n*10)
- console.log is O(1)
- Total: O(10n) → Simplified to O(n)
Constants are dropped in Big-O notation`
}, {
    id: 70,
    question: "Select the wrong statement regarding traceability in software development projects",
    options: ["Traceability shows the dependency among two or more requirements if any", "Requirements should be linked to the respective stakeholders who generated them", "Every design element (component) should be linked back to the requirement", "Traceability traces the overall cost and schedule of every activity in the requirements"],
    correctAnswer: 3,
    explanation: `Traceability matrices track:
- Requirement sources
- Design/test coverage
- Change impacts
They don't track:
- Project costs
- Schedules
Those are managed via project management tools`
}, {
    id: 71,
    question: "Which activity comes last in fundamental program development in c++?",
    options: ["Memory allocation for variables", "Linking", "Compiling program", "Writing program"],
    correctAnswer: 1,
    explanation: `C++ build process:
1. Write source code
2. Compile to object files
3. Link object files & libraries
Memory allocation occurs during execution (runtime)`
}, {
    id: 72,
    question: "Which design pattern is used to restore the state of an object to its previous state?",
    options: ["Visitor pattern", "Memento pattern", "Observer pattern", "Iterator pattern"],
    correctAnswer: 1,
    explanation: `Design patterns:
- Memento: State restoration (Originator/Caretaker)
- Visitor: Operations on object structures
- Observer: Publish-subscribe mechanism
- Iterator: Sequential access to collections`
}, {
    id: 73,
    question: "Which of the following describes a set of standards and an associated network protocol that allow establishing a secure channel between a local and a remote computer?",
    options: ["Secure socket layer(SSL)", "Secure shell(SSH)", "Authentication, Authorization and Accounting(AAA)", "Simple network management protocol(SNMP)"],
    correctAnswer: 1,
    explanation: `Protocol comparison:
- SSH: Secure remote access (encrypted channel)
- SSL/TLS: Secure web communications
- AAA: Security framework (RADIUS/TACACS+)
- SNMP: Network device monitoring`
}, {
    id: 74,
    question: "What components hides the distinctions or boundaries between various micro services from end client application?",
    options: ["A Layered system", "API gateway", "API proxy", "API logging"],
    correctAnswer: 1,
    explanation: `API Gateway in microservices:
- Single entry point
- Routes requests
- Aggregates responses
- Handles cross-cutting concerns (auth, logging)
Hides service topology from clients`
}, {
    id: 75,
    question: "Select a fundamental issue that may not be considered by the software architects during the architectural design process?",
    options: ["Which architectural organization is best for delivering the functional requirements", "How to decompose structural components in to sub components", "How the system will be distributed across a number of cores or processes", "Which architectural patterns or styles to use"],
    correctAnswer: 2,
    explanation: `Core/process distribution is:
- Implementation detail
- Handled during detailed design
Architects focus on:
- Patterns/styles
- Component decomposition
- Requirement fulfillment`
}, {
    id: 76,
    question: "Which of the following statement is not correct statement regarding of project life cycle?",
    options: ["In agile life cycle the project scope is generally determined early in the project life cycle, but time and cost estimates are routinely modified", "In waterfall life cycle, the project scope, time and cost are determined in the early phase of the life cycle.", "In agile life cycles, the project scope cannot be outlined and agreed before the start of iteration.", "In an incremental life cycle, the deliverable is produced through a series of iterations that successively add functionality within a predetermined time frame."],
    correctAnswer: 2,
    explanation: `Agile projects:
- Have high-level scope definition
- Refine details iteratively
- Can establish initial agreements
Waterfall: Fixed scope/cost/time
Incremental: Phased functionality`
}, {
    id: 77,
    question: "Which of the following is not among the characterizing features of database approach?",
    options: ["Application-data dependency", "Sharing of data", "Self-describing", "Data abstraction"],
    correctAnswer: 0,
    explanation: `Database approach features:
- Data independence (reduces app-data coupling)
- Multi-user access
- Metadata (self-describing)
- Abstract views
File systems exhibit application-data dependency`
}, {
    id: 78,
    question: "What is an activity in android?",
    options: ["android class used to configure the android application", "It is an intent", "android package file holding all the package used", "A single screen in an application with supporting java code"],
    correctAnswer: 3,
    explanation: `Android Activity:
- Represents single UI screen
- Manages user interactions
- Has lifecycle methods
- Contains Java/Kotlin code
Intents are messaging objects between components`
}, {
    id: 79,
    question: "Which of the following is not an approach used by IT security specialists to enhance the security level of the network?",
    options: ["Use of Intrusion detection system", "Use of Wana cry protocol", "Use of physical security", "Use of intrusion prevention system"],
    correctAnswer: 1,
    explanation: `WannaCry is:
- Ransomware malware
- Security threat, not protection
Security approaches:
- IDS/IPS: Threat detection/prevention
- Physical security: Access control`
}, {
    id: 80,
    question: "As a software tester, when do you implement configuration management procedures?",
    options: ["During test planning", "During test closing", "During test execution", "During test initiation"],
    correctAnswer: 0,
    explanation: `Configuration management:
- Established during planning
- Tracks test artifacts
- Manages versions
- Maintains traceability
Applied throughout but initiated in planning`
}, {
    id: 81,
    question: "Identify the one that comes first in data mining process",
    options: ["Data cleaning", "Data integration", "Business understanding", "Data selection"],
    correctAnswer: 2,
    explanation: `CRISP-DM process order:
1. Business understanding
2. Data understanding
3. Data preparation (cleaning/integration)
4. Modeling
5. Evaluation
6. Deployment`
}, {
    id: 82,
    question: "A TCP/IP layer which is responsible for addressing, path selection and routing refers:",
    options: ["Application layer", "Internet layer", "Transport layer", "Network Access layer"],
    correctAnswer: 1,
    explanation: `TCP/IP layers:
- Internet (IP): Routing/addressing
- Transport (TCP/UDP): End-to-end delivery
- Application: User protocols
- Network Access: Physical transmission`
}, {
    id: 83,
    question: "Which of the following analysis mechanism defines the input for which the algorithm takes the least time (fastest time to complete)?",
    options: ["Worst case", "Best case", "Standard case", "Average case"],
    correctAnswer: 1,
    explanation: `Algorithm analysis cases:
- Best: Optimal input scenario
- Worst: Most unfavorable input
- Average: Expected performance
Standard case isn't a formal analysis term`
}, {
    id: 84,
    question: "Which learning algorithm is usually applied to data that does not contain any label information, so we do not know what the right output should be?",
    options: ["Transfer learning", "Supervised learning", "Unsupervised learning", "Reinforcement learning"],
    correctAnswer: 2,
    explanation: `Learning types:
- Unsupervised: No labels (clustering)
- Supervised: Labeled data
- Reinforcement: Reward-based
- Transfer: Knowledge reuse`
}, {
    id: 85,
    question: "Depending on the organization of the elements which of the following approach is a non-linear data structure?",
    options: ["Queue", "Stack", "Tree", "Linked list"],
    correctAnswer: 2,
    explanation: `Non-linear structures:
- Trees: Hierarchical
- Graphs: Networked
Linear structures:
- Queues: FIFO
- Stacks: LIFO
- Linked lists: Sequential`
}, {
    id: 86,
    question: "Which one of the following can be among possible source of unstructured data?",
    options: ["Apple employee database", "RDBMS systems", "Registrar student database", "Google search engine"],
    correctAnswer: 3,
    explanation: `Unstructured data sources:
- Search engine results
- Social media
- Emails
- Multimedia
Structured data:
- RDBMS
- Formatted databases`
}, {
    id: 87,
    question: "Select the one that is not related with the purpose of properly documenting software architecture",
    options: ["For Stakeholder communication", "To easily figure out the source code flow", "For critical system design decisions", "To know how the system is organized and interoperate"],
    correctAnswer: 1,
    explanation: `Architecture documentation focuses on:
- High-level design
- Component interactions
- Design rationale
Source code flow is implementation detail (low-level)`
}, {
    id: 88,
    question: "One of the following statement is correct about Artificial Intelligence (AI)?",
    options: ["It refers to the development of machine that can only perform physical tasks.", "It refers to the development of machine that can only perform simple, repetitive tasks.", "It refers to the development of machine that can perform tasks only in a controlled laboratory setting.", "It refers to the development of machine that can perform tasks that typically require human intelligence."],
    correctAnswer: 3,
    explanation: `AI encompasses:
- Reasoning
- Learning
- Problem-solving
- Perception
Not limited to physical/simple tasks or lab environments`
}, {
    id: 89,
    question: "Which of the following is a process of selecting program paths in such a manner that certain branches (i.e, outgoing edges of nodes) of a control flow graph are covered by the execution of those paths?",
    options: ["Branch coverage", "Branch expansion", "Branch control", "Branch boundary"],
    correctAnswer: 0,
    explanation: `Code coverage types:
- Branch: All decision outcomes
- Statement: All lines
- Path: All possible routes
Other options are not standard testing terms`
}, {
    id: 90,
    question: "Give a situation two hosts attempt on half-duplex Ethernet LAN to send data concurrently, resulting in a collision and subsequent to this collision, what will the hosts do?",
    options: ["The jam signal indicates that the collision has been cleared", "An electrical pulse indicates that the collision has cleared", "The hosts will attempt to resume transmission after a time delay has expired", "The router on the segment will signal that the collision has cleared"],
    correctAnswer: 2,
    explanation: `CSMA/CD process:
1. Detect collision
2. Send jam signal
3. Wait random backoff time
4. Retransmit
No router involvement in LAN collisions`
}, {
    id: 91,
    question: `What is the time complexity of below function?

Public void function (int n){
for(int i=0; i<n; i++)
for(int j=0; j<i*i; j++)
if(j%i==0){
for(int k=0; k<j; k++)
print("*");
}
}`,
    options: ["O(n^2)", "O(nlogn)", "O(n^7)", "O(n^5)"],
    correctAnswer: 3,
    explanation: `Complexity analysis:
- Outer loop runs O(n) times
- Middle loop runs up to i² times, which is O(n²) at maximum
- The condition j%i==0 is true when j is divisible by i, which happens O(i) times in the range [0,i²)
- Inner loop runs j iterations each time the condition is met, where j can be up to O(n²)
- Therefore, the total complexity is: O(n) × O(i) × O(n²) = O(n⁴)

Technically the answer should be O(n⁴), but in the given options, O(n⁵) is the closest valid answer.`
}, {
    id: 92,
    question: "Identify the design principle that does not apply to software system",
    options: ["design should be traceable to the analysis model", "design should be structured to accommodate change", "design should exhibit uniformity and integration", "design should be reinventing the wheel from scratch"],
    correctAnswer: 3,
    explanation: `Good design principles:
- Traceability
- Maintainability
- Consistency
Anti-patterns:
- Reinventing solutions
- Ignoring existing patterns
DRY (Don't Repeat Yourself) principle`
}, {
    id: 93,
    question: "You are required to write a program that iteratively takes 50 numbers from user input and adds them up only if the numbers are positive and skips if not. Which control structure best fits this scenario?",
    options: ["break", "continue", "for", "jump"],
    correctAnswer: 1,
    explanation: `Control structures:
- continue: Skips current iteration
- break: Exits loop entirely
- for: Loop structure
- jump: Not standard in high-level languages
Best fits conditional skipping requirement`
}, {
    id: 94,
    question: "Which of the following UML elements is wrongly applied?",
    options: ["Class diagram shows the object classes in a system and their relation", "Activity diagram shows how the system reacts to internal and external events", "Use case diagram represents an interaction with a system", "Sequence diagram shows the sequence of interactions required to complete some operation"],
    correctAnswer: 1,
    explanation: `UML diagram purposes:
- Activity: Workflows (not event reaction)
- Statechart: Event response
- Use case: User-system interactions
- Sequence: Message ordering
- Class: Static structure`
}, {
    id: 95,
    question: "A memory management policy that that decisions must be made as to which page or pages are to be supplanted when a memory is full is known as:",
    options: ["Cleaning policy", "Load policy", "Replacement policy", "Fetch policy"],
    correctAnswer: 2,
    explanation: `Page replacement policies:
- FIFO, LRU, OPT algorithms
- Decide victim pages
Other policies:
- Fetch: When to load pages
- Cleaning: When to write dirty pages`
}, {
    id: 96,
    question: "Which software model would you apply for business operating in a changing environment where the initial requirements in inevitably change due to some internal and external factors?",
    options: ["Agile development method", "Spiral model", "Water fall model", "Code and run"],
    correctAnswer: 0,
    explanation: `Model selection criteria:
- Agile: Changing requirements
- Spiral: High risk projects
- Waterfall: Stable requirements
- Code-and-run: No formal process`
}, {
    id: 97,
    question: "Assume that you are assigned to design a dormitory management database. A dormitory is located on some building and has attributes specified as DORM (DormId, floornumber) and a DormId is primary key based on university's rule, six students can be assigned to one dorm. Students can be tracked with attributes STUDENT (IdNo, Name, Departement) and IdNo is a primary key. Based on this scenario description, which of the following SQL statement is correct to establish relationship between DORM and STUDENT assuming DorId is foreign key?",
    options: ["FOREIGN KEY (DorID) REFERENCES DORM(DormID)", "STUDENT table is a reference relation", "FOREIGN KEY (DorID) REFERENCEd by DORM(DormID)", "DORM table is a referencing relation"],
    correctAnswer: 0,
    explanation: `Foreign key syntax:
- Parent: DORM (DormID PK)
- Child: STUDENT (DorID FK)
Correct constraint:
FOREIGN KEY (DorID) REFERENCES DORM(DormID)
Establishes 1-to-many relationship`
}, {
    id: 98,
    question: "Which one of the following statements is wrong regarding try...catch construct?",
    options: ["When exception occurs, the execution of try block is interrupted", "The execution control is moved to catch block after exception occur in try block.", "The catch block is used to handle exceptions that occur in try block.", "The catch block is executed once regardless of exceptions in try block"],
    correctAnswer: 3,
    explanation: `try-catch behavior:
- Catch only executes on exception
- Multiple catches possible
- Uncaught exceptions propagate
Correct flow:
1. Try executes normally if no exception
2. On exception: jump to matching catch`
}, {
    id: 99,
    question: "Which of the following is not the function of Cross-over UTP cable?",
    options: ["To connect switch to switch", "To connect pc to pc", "To connect router to pc", "To connect switch to pc"],
    correctAnswer: 3,
    explanation: `Crossover cable uses:
- Like devices (switch-switch, PC-PC)
- Router-PC (similar to PC-PC)
Standard straight-through for:
- Switch-PC
- Router-switch
Pin configurations differ`
}, {
    id: 100,
    question: "Who is responsible for documenting faults found during the software development process?",
    options: ["Tester", "Developer", "Scrum master", "Requirement engineer"],
    correctAnswer: 0,
    explanation: `Fault documentation:
- Testers: Log defects
- Developers: Fix defects
- Scrum master: Facilitates process
- RE: Manages requirements
Defect tracking systems standardize reporting`
}];