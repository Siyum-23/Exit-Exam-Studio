[{
    id: 1,
    question: "A process is terminated by the operating system due to a reference to non-existing memory. Which one of the following best explains the process termination?",
    options: ["Error exit", "Fatal exit", "Normal exit", "Terminated by another process"],
    correctAnswer: 1,
    explanation: "A fatal exit occurs when a process attempts to access memory that doesn't exist (segmentation fault). This is a severe error that forces the OS to terminate the process."
}, {
    id: 2,
    question: "Size of large data files can be reduced to save storage disk space. Which algorithm is appropriate to reduce size of large files?",
    options: ["Merge sort algorithm", "Huffman encoding algorithm", "Heap sort algorithm", "Prim's algorithm"],
    correctAnswer: 1,
    explanation: "Huffman encoding is a lossless data compression algorithm that uses variable-length codes to represent data, with more frequent data items getting shorter codes, thus reducing overall file size."
}, {
    id: 3,
    question: "Which one of the following is asynchronous in message communication?",
    options: ["Blocking send", "Blocking receive", "Direct message", "Non-block receive"],
    correctAnswer: 3,
    explanation: "Non-blocking receive is asynchronous because the receiver doesn't wait for the message to arrive - it can continue processing and check for messages later."
}, {
    id: 4,
    question: "Which one of the following is true about functions in JavaScript?",
    options: ["Function names can begin with digits", "There is no limit to the number of function parameters that a function may contain", "Function names can contain spaces", "Function names are not case-sensitive"],
    correctAnswer: 1,
    explanation: `JavaScript functions can technically accept any number of parameters (though practical limits exist based on implementation).
Function names cannot begin with digits (a), cannot contain spaces (c), and are case-sensitive (d).`
}, {
    id: 5,
    question: `Consider the following fragment of C++ code:

const int x = 8;
const int y = 16;
if(x > y)
{
    int z = x + y;
}

For codes like the above one, which technique of code optimization is appropriate?`,
    options: ["Arithmetic simplification", "Compile time evaluation", "Code motion", "Dead code elimination"],
    correctAnswer: 3,
    explanation: "Dead code elimination would remove the entire if block since the condition (8 > 16) is always false at compile time, making the code inside unreachable."
}, {
    id: 6,
    question: "Suppose you have received a message from your friend but the message is scrambled for the sake of security. Your friend has used a program to encode messages into scrambled text. In order to read the message which program would you use?",
    options: ["Secret key", "Decryption program", "Encryption program", "Ciphertext"],
    correctAnswer: 1,
    explanation: "A decryption program is needed to reverse the encryption process and convert the scrambled message (ciphertext) back to its original form."
}, {
    id: 7,
    question: "In a tree data structure, if a node has no parent node, then the node is ______.",
    options: ["External node", "Root node", "Internal node", "Parent node"],
    correctAnswer: 1,
    explanation: "The root node is the only node in a tree that has no parent. All other nodes have exactly one parent (except in graphs)."
}, {
    id: 8,
    question: "Which statement is true about pop() operation of Stack data structures?",
    options: ["pop() inserts new element at the middle of stack", "pop() returns the end/top element but it doesn't delete that element", "pop() removes the end/top element from stack", "pop() inserts new element at the beginning/bottom of stack"],
    correctAnswer: 2,
    explanation: "The pop() operation in a stack removes and returns the top element (LIFO principle). It doesn't insert elements (that's push()) and it does remove the element."
}, {
    id: 9,
    question: `Given the schemas:
BOOK (Book_id, Title, Publisher_name)
BOOK_AUTHOR (Book_id, Author_name)
PUBLISHER (Name, Address, Phone)

Which one of the following SQL is correct to delete the publisher named as 'XWZ' from the PUBLISHER table`,
    options: ["DELETE FROM PUBLISHER WHERE Address = 'XWZ'", "DELETE FROM PUBLISHER WHERE Name = 'XWZ'", "DELETE FROM BOOK_AUTHOR WHERE Address = 'XWZ'", "DELETE FROM BOOK WHERE Name = 'XWZ'"],
    correctAnswer: 1,
    explanation: "The correct SQL deletes from the PUBLISHER table where the Name column matches 'XWZ'. The other options either delete from wrong tables or use incorrect conditions."
}, {
    id: 10,
    question: "Which one of the following is not correct about transaction failure?",
    options: ["Concurrency control enforcement avoids transaction failure", "Transactions fail if logical errors are detected", "Transactions fail if disk blocks lose their data", "Catastrophes can be cause of transaction failure"],
    correctAnswer: 0,
    explanation: `Concurrency control prevents interference between transactions but doesn't prevent all types of failures.
Transactions can fail due to logical errors (b), disk failures (c), and catastrophes (d).`
}, {
    id: 11,
    question: "Which asymptotic notation describes average case analysis?",
    options: ["f(n) = Big-Oh", "f(n) = Ω (Big omega)", "f(n) = little-ω(little omega)", "f(n) = θ (thetha)"],
    correctAnswer: 3,
    explanation: "Theta (θ) notation provides tight bounds (both upper and lower), making it suitable for precise analysis when the average case matches the worst case. For average case analysis, we typically use expected value notation E[f(n)], though θ notation can represent average case when the bounds are tight."
}, {
    id: 12,
    question: "Which one of the following is not an example of scripting languages?",
    options: ["Python", "Perl", "C++", "PHP"],
    correctAnswer: 2,
    explanation: "C++ is a compiled language, not a scripting language. Scripting languages like Python, Perl, and PHP are typically interpreted and used for automating tasks."
}, {
    id: 13,
    question: "What will be the output of the following JavaScript statement? Math.sqrt(36)",
    options: ["1", "6", "36", "30"],
    correctAnswer: 1,
    explanation: "Math.sqrt() calculates the square root, so Math.sqrt(36) returns 6 (since 6 × 6 = 36)."
}, {
    id: 14,
    question: "Which one of the following is false about project planning stage?",
    options: ["Project planning is a one-time task in software development life cycle", "Risk analysis is done during project planning", "Cost estimation is done during project planning", "Preparing time schedule is done during project planning"],
    correctAnswer: 0,
    explanation: "Project planning is an ongoing activity throughout the SDLC, not a one-time task. The other options correctly describe activities in project planning."
}, {
    id: 15,
    question: "Which one of the following is different from the other based on its role in computer network?",
    options: ["Routers", "Network printer", "Hubs", "Wireless access point"],
    correctAnswer: 1,
    explanation: "Network printer is an end device that uses the network, while routers, hubs, and WAPs are all network infrastructure devices that facilitate communication."
}, {
    id: 16,
    question: "Advancement of operating system is closely tied to computer architectures, therefore, has passed through different generations. Which one of the following generation and advancement is wrongly coupled?",
    options: ["Fourth generation -> real time systems", "Third generation -> batch system", "First generation -> single user", "Second generation -> multiprogramming"],
    correctAnswer: 1,
    explanation: `Third generation saw time-sharing systems, not batch systems (which were first generation).
Other couplings are correct: 4th-gen had real-time, 1st-gen was single user, 2nd-gen introduced multiprogramming.`
}, {
    id: 17,
    question: "______ is a network architecture characteristic that states a network can expand quickly to address needs of new users and application without having impact on the services delivered to existing users.",
    options: ["Scalability", "Fault tolerance", "Security", "Quality of service"],
    correctAnswer: 0,
    explanation: "Scalability refers to a system's ability to handle growth by adding resources without degrading performance for existing users."
}, {
    id: 18,
    question: "Look at the following PHP line: $list = array(20, 12, 23, 19, 18); What is the index of data value 19?",
    options: ["3", "2", "0", "1"],
    correctAnswer: 0,
    explanation: "PHP arrays are zero-indexed. The value 19 is at index 3 (positions: 0=20, 1=12, 2=23, 3=19, 4=18)."
}, {
    id: 19,
    question: "Which one of the following algorithms can be used to extract Minimum Spanning Tree from an input graph?",
    options: ["Dijkstra's algorithm", "Merge sort algorithm", "Huffman encoding algorithm", "Prim's algorithm"],
    correctAnswer: 3,
    explanation: `Prim's algorithm is specifically designed to find a minimum spanning tree (MST).
Dijkstra's finds shortest paths, Merge sort is for sorting, and Huffman encoding is for compression.`
}, {
    id: 20,
    question: "______ is set of attributes that can be seen by a program and can have direct impact on the logical execution of a program.",
    options: ["Arrangement", "Architecture", "Organization", "Flow control"],
    correctAnswer: 1,
    explanation: `Architecture refers to the programmer-visible aspects of a system that affect program execution (instruction set, registers, etc.).
Organization refers to internal implementation details not visible to programmers.`
}, {
    id: 21,
    question: "Which quantifier can be used for some portion of the universe?",
    options: ["→", "↓", "∃", "^"],
    correctAnswer: 2,
    explanation: `The existential quantifier (∃) means "there exists" or "for some", while universal quantifier (∀) means "for all".
The other symbols are not standard quantifiers.`
}, {
    id: 22,
    question: `What is the output of the following C++ fragment code?

int a = 6, b = 8;
int x = 2, y = 4;
int c = (x > y ? (a--, x) : (b--, y));
cout << "a=" << a;
cout << "    b=" << b;
cout << "    c=" << c;`,
    options: ["a = 6    b = 7    c = 4", "a = 5    b = 7    c = 2", "a = 5    b = 8    c = 4", "a = 6    b = 8    c = 4"],
    correctAnswer: 0,
    explanation: `Since x(2) > y(4) is false, the else part executes: b-- (b becomes 7) and y(4) is assigned to c.
a remains 6 as the a-- operation wasn't executed.`
}, {
    id: 23,
    question: "Which one of the following is not true about fan trap in Entity Relationship Diagram?",
    options: ["It can be resolved by readjusting the model so that no one-to-many relationships fan out from an entity", "It occurs when there is no pathway between related entities", "When there is ambiguous pathway between some entity occurrences in related entity types", "Highly likely exit when more than two one-to-many relationships fan out from an entity"],
    correctAnswer: 1,
    explanation: `A fan trap occurs when there ARE pathways but they're ambiguous (not when there's no pathway).
It happens when multiple 1:M relationships fan out from a single entity, potentially causing misinterpretation.`
}, {
    id: 24,
    question: "Assume you have a universe of Key U. Which one is false statement regarding Direct Address table and Hash Table data structures?",
    options: ["If universe U is very large, Hash table is better than Direct Address table", "Hash table allocates one separate memory slot for each key in the universe U", "There is one to one correspondence between keys in the universe U and memory slots in the Direct Address table", "Direct Address table doesn't use hash function to map keys"],
    correctAnswer: 1,
    explanation: `Hash tables DON'T allocate slots for all possible keys - they use hashing to map keys to a smaller table size.
Other options are true: hash tables are better for large U (a), direct address has 1:1 mapping (c), and doesn't use hashing (d).`
}, {
    id: 25,
    question: "Which one of the following is a two-level cache having an internal and external caches?",
    options: ["Multilevel cache", "Single level cache", "Split cache", "Unified cache"],
    correctAnswer: 0,
    explanation: `Multilevel cache hierarchy includes L1 (internal) and L2 (external) caches.
Split cache divides L1 into instruction and data caches, while unified cache combines them.`
}, {
    id: 26,
    question: "For an input graph, Depth First Traversal algorithm uses ______ data structure to traverse.",
    options: ["Tree", "Stack", "Priority queue", "Queue"],
    correctAnswer: 1,
    explanation: `DFS uses a stack (either explicitly or via recursion) to keep track of vertices to visit.
BFS uses a queue, while priority queues are used in algorithms like Dijkstra's.`
}, {
    id: 27,
    question: "Suppose you are administering a network and would like to know whether a computer in the upstairs is connected to the network or not. Therefore, which command would you use?",
    options: ["nslookup", "traceroute", "ping", "DHCP discover"],
    correctAnswer: 2,
    explanation: `ping tests basic connectivity by sending ICMP echo requests.
nslookup queries DNS, traceroute shows path, and DHCP discover is for obtaining IP addresses.`
}, {
    id: 28,
    question: "Which one of the following is true about java and javascript?",
    options: ["Both are object oriented languages", "There are more features in javascript than java", "Javascript can be used in extremely sophisticated applications", "Javascript is compiled and interpreted in source code form"],
    correctAnswer: 2,
    explanation: `Modern JavaScript can power complex applications (e.g., Node.js, React).
Java is OOP but JavaScript is prototype-based (a), Java has more features (b), and JavaScript is interpreted (d).`
}, {
    id: 29,
    question: "Given input Alphabet Σ = {a, b, c, d} and empty string λ. Then, which one of the following is equivalent to Σ^0?",
    options: ["Σ^+", "Σ^*", "Σ", "{λ}"],
    correctAnswer: 3,
    explanation: `Σ^0 represents the set of all strings of length 0 from Σ, which is just the empty string {λ}.
Σ^+ is all non-empty strings, Σ^* includes empty string, and Σ is just the alphabet itself.`
}, {
    id: 30,
    question: "Which one of the following is not a single level ordered index?",
    options: ["Secondary index", "Multilevel index", "Clustering index", "Primary index"],
    correctAnswer: 1,
    explanation: `Multilevel index is hierarchical with multiple levels (not single level).
Primary, secondary, and clustering indexes are all single-level index types.`
}, {
    id: 31,
    question: "Suppose you have developed a self-driving car equipped with relevant sensors and camera that helps it to see the road and drive sensing traffic lights, pedestrians and signs. Its sensors are able to detect the environment but not all the aspects. Hence, in which environment is your car acting?",
    options: ["Discrete", "Fully observable", "Partially observable", "Stochastic"],
    correctAnswer: 2,
    explanation: `Since sensors can't detect all aspects (e.g., occluded objects), it's partially observable.
If all information was available, it would be fully observable. Stochastic refers to unpredictability.`
}, {
    id: 32,
    question: "Which network security issue shows the level of weakness in networks and devices?",
    options: ["Vulnerability", "Threat", "Attack", "Availability"],
    correctAnswer: 0,
    explanation: `Vulnerability refers to weaknesses that could be exploited.
Threat is potential danger, attack is the actual exploitation, and availability is a security goal.`
}, {
    id: 33,
    question: "Assume there is a line of patients waiting for a service from a clinic. Seriously sick patients should get service first. Which data structure is the most appropriate for the given type of real world problem?",
    options: ["Priority Queue", "Stack", "Tree", "Queue"],
    correctAnswer: 0,
    explanation: `Priority queue handles items with different priorities (serious patients first).
Regular queue is FIFO, stack is LIFO, and tree isn't suitable for this ordering scenario.`
}, {
    id: 34,
    question: "Which one of the following is a measure taken, to ensure information and information systems' availability, integrity, authentication and confidentiality?",
    options: ["Wiretapping", "Interception", "Information security", "Information assurance"],
    correctAnswer: 3,
    explanation: "Information assurance is a comprehensive approach that encompasses all aspects of information security (confidentiality, integrity, availability) plus additional measures like authentication, non-repudiation, and system reliability. Wiretapping and interception are threats, not protective measures."
}, {
    id: 35,
    question: "Which type of Turing machine has two tapes, one tape read-only and the other read-write tape?",
    options: ["Multi-head Turing machine", "Multi-dimensional Turing machine", "Off-line Turing machine", "Non-deterministic Turing machine"],
    correctAnswer: 2,
    explanation: `An off-line Turing machine has a read-only input tape and a read-write work tape.
Other types don't necessarily have this specific tape configuration.`
}, {
    id: 36,
    question: "Which one of the following is false about arrays in C++?",
    options: ["Size of an array should be constant at the time of array declaration", "We use [ ] square bracket at the time of array declaration", "We can access elements of arrays without using index number", "An array is a collection of similar data objects"],
    correctAnswer: 2,
    explanation: `Array elements MUST be accessed using indices in C++.
Other statements are true: size must be constant (a), [ ] is used (b), and arrays store similar types (d).`
}, {
    id: 37,
    question: "Which branch of study deals with whether a problem can be solved at all or not, regardless of the resources required?",
    options: ["Automata theory", "Set theory", "Computability theory", "Complexity theory"],
    correctAnswer: 2,
    explanation: `Computability theory determines what problems can be solved.
Complexity theory studies resources needed, automata theory models computation, and set theory is mathematical foundation.`
}, {
    id: 38,
    question: "At which layer of the OSI model devices such as bridges, switches and Network interface cards are used?",
    options: ["Physical layer", "Network layer", "Application layer", "Data link layer"],
    correctAnswer: 3,
    explanation: `Bridges, switches, and NICs operate at Layer 2 (Data Link).
Routers are Layer 3 (Network), while hubs are Layer 1 (Physical).`
}, {
    id: 39,
    question: "When two transactions that access the same database items have their operations interleaved in a way that makes the value of some database item incorrect",
    options: ["It is an incorrect summary problem", "It is a dirty read problem", "It is a lost update problem", "It is a temporary read problem"],
    correctAnswer: 2,
    explanation: `Lost update occurs when two transactions read the same data and then update it, with one update overwriting the other.
Dirty read is reading uncommitted data, incorrect summary involves aggregate calculations.`
}, {
    id: 40,
    question: 'Which one of data updates best describes the following statement? "All modified data items in the cache is written either after transaction ends its execution or after a pre-determined number of transactions have concluded their execution"',
    options: ["In-place update", "Immediate update", "Deferred update", "Shadow update"],
    correctAnswer: 2,
    explanation: `Deferred update delays writing changes until transaction commit or batch point.
Immediate update writes changes as they occur, while shadowing maintains old versions until commit.`
}, {
    id: 41,
    question: `What is the output of the following Java fragment code?

int[] list = new int[4];
int sum = 0;
for(int i = 0; i < list.length; i++)
{
    list[i] = i^3;
    sum += list[i];
}
System.out.print(sum);`,
    options: ["3", "36", "18", "6"],
    correctAnswer: 3,
    explanation: `The ^ operator in Java is bitwise XOR (not exponentiation).
Calculations: 0^3=3, 1^3=2, 2^3=1, 3^3=0 → sum=3+2+1+0=6.`
}, {
    id: 42,
    question: "Which statement is false about programming language generations?",
    options: ["Assembly language should be translated to machine language before execution", "Assembly language is machine independent", "Fifth generation programming languages need very powerful hardware and software", "Machine language can be executed without translation"],
    correctAnswer: 1,
    explanation: `Assembly language is machine-dependent (specific to processor architecture).
Other statements are true: assembly needs translation (a), 5GL needs power (c), machine code runs directly (d).`
}, {
    id: 43,
    question: "Which one of the following is the smallest heading tag?",
    options: ["<H4>", "<H6>", "<H1>", "<H3>"],
    correctAnswer: 1,
    explanation: `HTML heading tags range from <h1> (largest) to <h6> (smallest).
The numbers indicate hierarchy level, with higher numbers being smaller/subordinate headings.`
}, {
    id: 44,
    question: "Which one of the following does not show non-functional requirement of software systems?",
    options: ["Response time", "Displaying information", "Reliability", "Memory requirement"],
    correctAnswer: 1,
    explanation: `Displaying information is a functional requirement (what the system does).
The others are non-functional: performance (a), quality (c), and constraints (d).`
}, {
    id: 45,
    question: "If you plan a software test to be done by clients to demonstrate that the system satisfies their requirements, which phase of software testing is appropriate?",
    options: ["Unit testing", "System testing", "Acceptance testing", "Integration testing"],
    correctAnswer: 2,
    explanation: `Acceptance testing is performed by clients to verify requirements.
Unit tests individual components, integration tests interactions, and system tests the complete system.`
}, {
    id: 46,
    question: "Which concept refers to extending specialized classes from generalized classes in object-oriented programming?",
    options: ["Overloading", "Data field Encapsulation", "Overridding", "Inheritance"],
    correctAnswer: 3,
    explanation: `Inheritance allows creating specialized (child) classes from generalized (parent) classes.
Overloading is same name different parameters, overriding is redefining parent methods, encapsulation is data hiding.`
}, {
    id: 50,
    question: "What does the program data independence in the database approach entails for?",
    options: ["Both program and data are defined together", "The application may be affected when data changes", "Programs can create redundant data independently", "Data and applications are defined separately"],
    correctAnswer: 3,
    explanation: "Program-data independence means that the data and applications are defined separately, allowing changes to data definitions without affecting application programs."
}, {
    id: 49,
    question: `Let a Grammar G = ({S}, {a, b}, S, P), where {S} is set of variables, {a, b} is set of terminal symbols, S is start variable and P is set of productions. Then which one of the following is not an element of the language: (L) which is generated from G. Given:
P : S → aSD, S → λ`,
    options: ["λ", "a", "aabb", "ab"],
    correctAnswer: 1,
    explanation: "The grammar produces strings with equal numbers of 'a's and 'b's (including λ). 'a' alone cannot be generated as it would require an equal number of 'b's."
}, {
    id: 48,
    question: `What is the output of the following fragment C++ code?
for(int n = 1; n <= 18; n = n + 2)
{
    if(n % 7 != 0)
    cout << n << " ";
    else
    break;
}`,
    options: ["1 2 3 4 5 6", "3 5 7", "1 3 5 7 9 11 13 15 17", "1 3 5"],
    correctAnswer: 3,
    explanation: "The loop prints odd numbers from 1 to 18 but breaks when n=7 (since 7%7=0). So it prints 1, 3, 5 before the loop would reach 7."
}, {
    id: 51,
    question: "______ is the whole thing that an agent has observed so far concerning the existing scenario in the environment.",
    options: ["Knowledge", "Performance measure", "Action", "Perception"],
    correctAnswer: 3,
    explanation: "Perception refers to all the observations an agent has made about its environment up to the current moment."
}, {
    id: 53,
    question: "Which one of the following is valid statement regarding PHP variables?",
    options: ['$test = "Computer;', "test = 5;", `$test = "This is 'Computer science'";`, "$test = 9.5"],
    correctAnswer: 2,
    explanation: "Option C is the only syntactically correct PHP variable assignment with proper string delimiters and variable prefix ($)."
}, {
    id: 52,
    question: "Which one of the following is a security service enforced to protect discloser of information, which can be stored in file or being on transmission, from unauthorized entities?",
    options: ["Authentication", "Integrity", "Availability", "Confidentiality"],
    correctAnswer: 3,
    explanation: "Confidentiality ensures that information is not disclosed to unauthorized individuals, entities, or processes."
}, {
    id: 57,
    question: "Which one of the following computers can be most secured compared to the rest?",
    options: ["A computer connected to the Internet and the latest anti-virus installed on it", "A computer connected to the Internet with the latest firewall system", "A computer connected to the Internet having strong intrusion detection", "A computer that is not connected to the Internet"],
    correctAnswer: 3,
    explanation: "A computer not connected to the Internet has the least exposure to external threats, making it the most secure option."
}, {
    id: 55,
    question: "Given input Alphabet Σ = {a, b, c, d} and empty string λ. Then, which one of the following is true about Σ*?",
    options: ["Σ* = Σ+U{λ}", "Σ* = Σ+UΣ2UΣ3UΣ4", "Σ* = {λ}", "Σ* = Σ+"],
    correctAnswer: 0,
    explanation: "Σ* (Kleene star) includes all possible strings over Σ including the empty string λ, while Σ+ excludes λ."
}, {
    id: 54,
    question: "Assume you make modification to your software. Then you want to make sure that the modification has not had introduced new errors. Which software testing level is required?",
    options: ["Static testing", "Beta testing", "Regression testing", "Dynamic testing"],
    correctAnswer: 2,
    explanation: "Regression testing is performed to ensure that changes (like modifications) haven't introduced new bugs in existing functionality."
}, {
    id: 60,
    question: "Which type of variable can be accessed through out our C++ program scope?",
    options: ["Global", "Static", "Automatic", "Local"],
    correctAnswer: 0,
    explanation: "Global variables have program-wide scope and can be accessed from any function or block in the program."
}, {
    id: 59,
    question: "Which one of the following is not correct about computer architecture and organization?",
    options: ["An architecture can be used for long time encompassing different computer models", "Manufacturers offer computer with same architecture but different organization", "An organization can last for long time as an architecture does", "An architecture can remain for long time but its organization can change"],
    correctAnswer: 2,
    explanation: "Computer organization is more likely to change frequently compared to architecture, which tends to remain stable for longer periods."
}, {
    id: 58,
    question: "Which one of the following is correct for the statement below? A problem that occurs when one transaction updates a database item and then the transaction fails for some reason and the updated item is accessed by another transaction before it is changed back to its original value?",
    options: ["It is a lost update problem", "It is an incorrect summary problem", "It is a temporary read problem", "It is dirty read"],
    correctAnswer: 3,
    explanation: "A dirty read occurs when a transaction reads data that has been modified by another transaction that hasn't yet committed."
}, {
    id: 61,
    question: "Among phases of compiling process, in which phase a sequence of characters are converted into a sequence or tokens?",
    options: ["Code optimization", "Syntax analysis", "Semantic analysis", "Lexical analysis"],
    correctAnswer: 3,
    explanation: "Lexical analysis is the first phase where the compiler converts character sequences into tokens (lexemes)."
}, {
    id: 63,
    question: "If you want to allow subclasses to access data fields or methods defined in the super-class, but not to allow non-subclasses to access these data fields and methods, which access modifier is appropriate?",
    options: ["protected", "default", "public", "private"],
    correctAnswer: 0,
    explanation: "The protected modifier allows access by subclasses while restricting access from non-subclasses in other packages."
}, {
    id: 62,
    question: "What is the time complexity order of binary searching algorithm?",
    options: ["O(log₂n)", "O(n)", "O(1)", "O(n³)"],
    correctAnswer: 0,
    explanation: "Binary search has logarithmic time complexity O(log n) as it halves the search space with each comparison."
}, {
    id: 66,
    question: "Which one is a method used to obtain the meaning of encrypted information without access to secret key?",
    options: ["Encryption", "Decryption", "Crypto-analysis", "Cryptography"],
    correctAnswer: 2,
    explanation: "Cryptanalysis is the study of analyzing information systems to study the hidden aspects of the systems, often to break cryptographic security without knowledge of the key."
}, {
    id: 65,
    question: "Which one of the following is evaluating the degrees of success of an agent?",
    options: ["Performance measure", "Action", "Perception", "Knowledge"],
    correctAnswer: 0,
    explanation: "A performance measure evaluates how successful an agent is in achieving its objectives."
}, {
    id: 64,
    question: "Which one of the following lists of environments is the hardest for an agent?",
    options: ["Deterministic, fully observable, static", "Partially observable, static, continuous", "Sequential, non-deterministic, dynamic", "Fully observable, sequential, deterministic"],
    correctAnswer: 2,
    explanation: "Sequential, non-deterministic, dynamic environments are the hardest as they require complex decision-making with incomplete information in changing conditions."
}, {
    id: 70,
    question: "Which one of the following registers hold the address of the next pair of instructions to be fetched from memory?",
    options: ["Program counter", "Memory address register", "Memory buffer register", "Instruction buffer register"],
    correctAnswer: 0,
    explanation: "The program counter (PC) holds the memory address of the next instruction to be fetched from memory."
}, {
    id: 68,
    question: "Which one of the following is correct way creating String object?",
    options: ['String m = new String("Exit Exam");', 'String m = "Computer Science";', 'String m = new String("Technology");', "String m = 'H', 'e', 'I', 'I', 'o';"],
    correctAnswer: 1,
    explanation: "Option B shows the most common and efficient way to create a String object using string literals in Java."
}, {
    id: 67,
    question: "Which one of the following is false about String in Java?",
    options: ["We can create a String object using array of characters", "In Java a string is treated as object", "Content of a string can be changed once the string is created", "We can create a String object using String literal"],
    correctAnswer: 2,
    explanation: "Strings in Java are immutable - their content cannot be changed after creation (though you can create new String objects)."
}, {
    id: 71,
    question: "Which asymptotic notation describes worst case analysis?",
    options: ["f(n) = θ (theta)", "f(n) = little-ω (little omega)", "f(n) = Ω (Big omega)", "f(n) = little-oh"],
    correctAnswer: 0,
    explanation: "While Big-O (O) notation is typically used for worst-case analysis, Theta (θ) notation is more precise as it provides both upper and lower bounds. When we know the exact growth rate of the worst case (not just an upper bound), θ notation is appropriate."
}, {
    id: 72,
    question: "In which situation that using database management system (DBMS) becomes costly and not recommended to use it?",
    options: ["In embedded systems having too small storage space", "In situation where more than one users should access the database", "To control redundancy", "To deny access to unauthorized users"],
    correctAnswer: 0,
    explanation: "DBMS overhead makes it unsuitable for embedded systems with very limited resources where simpler storage solutions are preferred."
}, {
    id: 74,
    question: "What is the time complexity order of Quick sort algorithm?",
    options: ["O(n log₂n)", "O(2ⁿ)", "O(n²)", "O(n)"],
    correctAnswer: 0,
    explanation: "Quicksort has average-case time complexity of O(n log n), though it can degrade to O(n²) in worst-case scenarios with poor pivot choices."
}, {
    id: 73,
    question: "Which one of the following is not delimiter of PHP code?",
    options: ["<? ...... ?>", "<?php ...... ?>", '<script language="PHP"> ...... <\/script>', "<caption> ...... </caption>"],
    correctAnswer: 3,
    explanation: "<caption> tags are HTML table caption tags, not PHP delimiters. The other options are all valid PHP code delimiters."
}, {
    id: 77,
    question: `What is the output of the following Java fragment code?
int n = 6, m = 15, p = 3;
n -= m;
n *= p;
System.out.print(n);`,
    options: ["3", "-27", "24", "27"],
    correctAnswer: 1,
    explanation: `First operation: n = 6 - 15 = -9
Second operation: n = -9 * 3 = -27`
}, {
    id: 76,
    question: "Which one of the following is true about frames in HTML?",
    options: ["Frames are not difficult to handle for search engines", "Load on the server is not affected, if there are a large number of frames in a page", "Frames allow parts of the page to remain stationary while other parts scroll", "All browsers support frames"],
    correctAnswer: 2,
    explanation: "Frames can create stationary sections while other sections scroll, though they have many drawbacks including SEO and accessibility issues."
}, {
    id: 75,
    question: "A database management system (DBMS) has ______ to control locks.",
    options: ["Query optimizer", "Lock manager", "Lock table", "Query processor"],
    correctAnswer: 1,
    explanation: "The lock manager is the DBMS component responsible for controlling locks to ensure proper concurrency control."
}, {
    id: 79,
    question: "Which one of the following is not correct for the figure shown in Question 27?",
    options: ["P2 cannot be executed until P1 finishes", "P1 is waiting for a resource held by P2", "P0 is waiting for a resource held by P1", "P3 cannot be executed until P4 finishes"],
    correctAnswer: 3,
    explanation: "Without seeing Figure 27, based on typical process dependency graphs, option D is likely incorrect as it reverses the usual dependency direction."
}, {
    id: 78,
    question: "A university owns a number of private local area and wide area networks, which are designed for an access by its academic staff, students and administrative workers. Which term best describes the University's network?",
    options: ["Local Area Network", "Metropolitan Area Network", "The Internet", "Wide Area Network"],
    correctAnswer: 3,
    explanation: "A university network typically spans multiple locations (campuses) making it a Wide Area Network (WAN), though it may contain many LANs within it."
}, {
    id: 80,
    question: e.jsxs("div", {
        children: ["What is the purpose of an opcode that is as indicated in the figure below?", e.jsx("img", {
            src: "images/questions/opcode.png",
            alt: "opcode",
            style: {
                maxWidth: "300px"
            },
            onError: n => {
                const t = n.currentTarget;
                t.src = "/questions/opcode_backup.png",
                console.error("Image failed to load, fallback image loaded.")
            }
            ,
            onLoad: n => {
                const t = n.currentTarget;
                t.style.display = "block"
            }
        })]
    }),
    options: ["It determines the operation to be done", "It holds the destination address of an operand", "It holds the next instruction reference", "It holds the source address of an operand"],
    correctAnswer: 0,
    explanation: "The opcode portion of an instruction specifies the operation to be performed by the CPU."
}, {
    id: 83,
    question: "Which one of the following is correct about human role in system administration?",
    options: ["System administrator is not expected to have skills and confidence", "It doesn't need organizational skills", "It requires patience, understanding and knowledge", "Ethics is not a requirement to manage computers"],
    correctAnswer: 2,
    explanation: "System administration requires technical knowledge, patience, understanding of user needs, and strong organizational skills."
}, {
    id: 82,
    question: "Among the following, which one best describes a database management system (DBMS)?",
    options: ["It can help users to manage computer's activity", "It is responsible for creating and maintaining a database", "It can assist process images", "It can assist you to process document"],
    correctAnswer: 1,
    explanation: "A DBMS is specifically designed for creating, maintaining, and providing controlled access to databases."
}, {
    id: 81,
    question: "What will be the output of the following JavaScript statement? Math.floor(5.9)",
    options: ["11.8", "5", "9", "6"],
    correctAnswer: 1,
    explanation: "Math.floor() returns the largest integer less than or equal to a given number, so floor(5.9) = 5."
}, {
    id: 86,
    question: "Which one of the following is responsible for separating some machines from the rest to shield them from possible attacks?",
    options: ["Firewall", "Router", "Network operating system", "Switch"],
    correctAnswer: 0,
    explanation: "Firewalls are specifically designed to create security boundaries between networks or machines."
}, {
    id: 85,
    question: `What is the output of the following C++ fragment code?
int a, b;
a = 13;
b = 9;
while ((20 && 0) && (a > b))
{
    cout<<"Plants are our life";
}`,
    options: ['It displays message "Plants are our life" 20 times', 'It displays message "Plants are Our Life" 4 times', 'It displays message "Plants are our life" infinitely', "No message will be displayed"],
    correctAnswer: 3,
    explanation: "The condition (20 && 0) evaluates to 0 (false), so the loop body never executes."
}, {
    id: 84,
    question: "Which one of the following is not correct about threads?",
    options: ["It is a group of processes", "Threads are the entities schedule for execution on the CPU", "Threads have program counters", "Threads have registers to hold its working memory"],
    correctAnswer: 0,
    explanation: "Threads are not groups of processes - they are lightweight processes within a process that share the same memory space."
}, {
    id: 89,
    question: "A computer expert would like to know the number of processes that are completed per hour to assess the performance of a machine. Therefore, which one of the following best describes the expert's assessment?",
    options: ["Turnaround time", "System throughput", "Response time", "Waiting time"],
    correctAnswer: 1,
    explanation: "Throughput measures the number of processes completed per unit time, making it the appropriate metric here."
}, {
    id: 88,
    question: "Which network type is the largest as compared to the rest?",
    options: ["Local Area Network", "Wide Area Network", "Metropolitan Area Network", "The Internet"],
    correctAnswer: 3,
    explanation: "The Internet is the largest network, being a global network of networks that includes WANs, MANs, and LANs."
}, {
    id: 87,
    question: "Which one of the following phases is done before semantic analysis phase of compiling process?",
    options: ["Code generation", "Syntax analysis", "Code optimization", "Intermediate code generation"],
    correctAnswer: 1,
    explanation: "The standard compilation phases order is: Lexical Analysis → Syntax Analysis → Semantic Analysis → Intermediate Code Generation → Code Optimization → Code Generation."
}, {
    id: 90,
    question: "Assume you have a weighted graph G with a set of vertices V and set of edges E. Which one of the following problem is an optimization problem on the graph?",
    options: ["Traverse all vertices in graph G", "Is vertex p∈V reachable from vertex q∈V in graph G", "Find minimum spanning tree from graph G", "How many cycles are there in graph G"],
    correctAnswer: 2,
    explanation: "Finding a minimum spanning tree is an optimization problem as it seeks the spanning tree with minimum possible weight."
}, {
    id: 96,
    question: "An interface that has multiple lines connecting input/output module and peripheral device and assures multiple bits to be transferred at the same time is:",
    options: ["Serial interface", "One line interface", "Bus interface", "Parallel interface"],
    correctAnswer: 3,
    explanation: "Parallel interfaces transfer multiple bits simultaneously over multiple wires, unlike serial interfaces which send bits one at a time."
}, {
    id: 95,
    question: "Which statement is false about universal hashing technique?",
    options: ["Single fixed hash function technique is better than universal hashing technique in terms of collision reduction", "In universal hashing a hash function is selected randomly from set of hash functions for each key", "In universal hashing a hash function is selected from set of hash functions independent of keys.", "Universal hashing reduces the chance of data collision"],
    correctAnswer: 0,
    explanation: "Universal hashing is specifically designed to reduce collisions by randomly selecting hash functions, making it superior to fixed hash functions for collision reduction."
}, {
    id: 98,
    question: "Which one of the following is a step in problem solving that lists the actions and states that the agent has to consider provided a goal?",
    options: ["Problem formulation", "Execute", "Goal formulation", "Search"],
    correctAnswer: 0,
    explanation: "Problem formulation involves defining the states, actions, and transition model needed to solve a problem given a goal."
}, {
    id: 97,
    question: "Which one of the following is not correct about packet and circuit switching?",
    options: ["In packets switching messages are sent in small blocks", "Packet switching is more efficient than circuit switching", "In Packet switching and end-to-end connection has to be established", "In circuit switching a channel is dedicatedly used"],
    correctAnswer: 2,
    explanation: "Packet switching doesn't require establishing an end-to-end connection beforehand (that's circuit switching). Packets are routed independently."
}, {
    id: 99,
    question: "Linked list data structure is ______ type of data structure.",
    options: ["Non-linear data structure", "Dynamic data structure", "Fixed size data structure", "Static data structure"],
    correctAnswer: 1,
    explanation: "Linked lists are dynamic data structures as their size can grow or shrink during program execution by allocating/deallocating memory."
}, {
    id: 100,
    question: "Which deadlock prevention mechanisms don't require timestamp?",
    options: ["No-wait", "Wound-wait", "Wait-wait", "Wait-die"],
    correctAnswer: 0,
    explanation: "No-wait is the only mechanism listed that doesn't use timestamps. It simply aborts if a resource isn't immediately available."
}];