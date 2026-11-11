[
  {
    id: 1,
    question:
      "Which of the following PHP functions is used to connect to a MySQL database?",
    options: [
      "mysql_con()",
      "mysqli_connect()",
      "pg_connect()",
      "db_connect()",
    ],
    correctAnswer: 1,
    explanation:
      "The correct function is mysqli_connect() which is the modern PHP function for connecting to MySQL databases. mysql_con() is deprecated, pg_connect() is for PostgreSQL, and db_connect() is not a standard PHP function.",
  },
  {
    id: 2,
    question: "Which one of the following is NOT the components of frames?",
    options: [
      "MAC address of the source",
      "IP address of the destination",
      "Control options",
      "Data",
    ],
    correctAnswer: 1,
    explanation:
      "Frames operate at Layer 2 (Data Link Layer) and contain MAC addresses, not IP addresses. The components of a frame typically include: source/destination MAC addresses, control information, data/payload, and error checking (FCS). IP addresses are Layer 3 (Network Layer) addresses used in packets, not frames.",
  },
  {
    id: 3,
    question:
      "Which PHP superglobal is used to collect form data sent via the HTTP POST method?",
    options: ["$_POST", "$_GET", "$_REQUEST", "$_FORM"],
    correctAnswer: 0,
    explanation:
      "$_POST is specifically designed to collect data sent via POST method. $_GET is for GET method data, $_REQUEST combines POST/GET/COOKIE data, and $_FORM doesn't exist in PHP.",
  },
  {
    id: 4,
    question:
      "In PHP, which function is used to fetch the next row from a result set as an associative array?",
    options: [
      "mysqli_fetch_row()",
      "mysqli_fetch_array()",
      "mysqli_fetch_assoc()",
      "mysqli_fetch_object()",
    ],
    correctAnswer: 2,
    explanation: `mysqli_fetch_assoc() returns a row as an associative array where column names are keys. 
mysqli_fetch_row() returns indexed array, 
mysqli_fetch_array() can return both, and 
mysqli_fetch_object() returns an object.`,
  },
  {
    id: 5,
    question: "Which of the following is a network-level security control?",
    options: [
      "Firewalls",
      "Antivirus software",
      "Security awareness training",
      "Vulnerability scanning",
    ],
    correctAnswer: 0,
    explanation:
      "Firewalls operate at the network level to filter traffic. Antivirus is host-level, security training is administrative control, and vulnerability scanning is an assessment tool.",
  },
  {
    id: 6,
    question: "_____ is money that has been spent in the past.",
    options: ["Direct cost", "Indirect cost", "Sunk cost", "All of the above"],
    correctAnswer: 2,
    explanation:
      "Sunk costs are expenditures that have already occurred and cannot be recovered. They should not factor into future business decisions.",
  },
  {
    id: 7,
    question:
      "The insulation of data from direct access by the program is called as ___________",
    options: ["Data hiding", "Inheritance", "Abstraction", "Interface"],
    correctAnswer: 0,
    explanation:
      "Data hiding is an OOP principle where internal object data is not directly accessible, preventing unauthorized access and modification.",
  },
  {
    id: 8,
    question:
      "Which method is used to retrieve a value from SharedPreferences?",
    options: [
      'getInt("key")',
      'getString("key",null)',
      'getBoolean(0,"key")',
      "getAll()",
    ],
    correctAnswer: 1,
    explanation: `getString("key",null) is the correct format where the first parameter is the key and the second parameter is the default value to return if the key doesn't exist. Similar methods exist for other data types (getInt, getBoolean, etc.) following the same parameter pattern.`,
  },
  {
    id: 9,
    question:
      "A transaction A holds shared lock X. If transaction B also requests for shared lock on X_____",
    options: [
      "It will result in a deadlock situation",
      "It will immediately be rejected",
      "It will immediately be granted",
      "It'll be granted as soon as released by A",
    ],
    correctAnswer: 2,
    explanation:
      "Shared locks are compatible - multiple transactions can hold shared locks on the same resource simultaneously. Only exclusive locks cause blocking.",
  },
  {
    id: 10,
    question: "What is the main purpose of the Domain Name System (DNS)?",
    options: [
      "To store website files",
      "To resolve domain names to IP addresses",
      "To encrypt web traffic",
      "To manage web hosting services",
    ],
    correctAnswer: 1,
    explanation:
      "DNS translates human-readable domain names (like example.com) to machine-readable IP addresses (like 192.0.2.1), functioning as the internet's phonebook.",
  },
  {
    id: 11,
    question:
      "_____ is a block of Recovery Manager (RMAN) job commands that is stored in the recovery catalog.",
    options: [
      "Recovery procedure",
      "Recovery block",
      "Stored block",
      "Stored script",
    ],
    correctAnswer: 3,
    explanation:
      "Stored scripts in RMAN are named sets of RMAN commands stored in the recovery catalog that can be executed like macros for repetitive tasks.",
  },
  {
    id: 12,
    question:
      "Which programming languages are primarily used for creating client-side web applications?",
    options: [
      "Java and C++",
      "PHP and Python",
      "HTML, CSS, and JavaScript",
      "SQL and Ruby",
    ],
    correctAnswer: 2,
    explanation: `Client-side web development primarily uses:
- HTML for structure
- CSS for presentation
- JavaScript for behavior
Other options are either server-side languages or not web-focused.`,
  },
  {
    id: 13,
    question:
      "An entity in A is associated with at least one entity in B, and an entity in B is associated with at most one entity in A. This is called as_______?",
    options: ["One-to-many", "One-to-one", "Many-to-many", "Many-to-one"],
    correctAnswer: 3,
    explanation: `This describes a many-to-one relationship:
- Many in A to one in B
Example: Many employees (A) work in one department (B)`,
  },
  {
    id: 14,
    question: "What is the purpose of a computer's device drivers?",
    options: [
      "To manage the computer's power",
      "To provide a user interface",
      "To allow the OS to communicate with hardware",
      "To control the computer's input/output",
    ],
    correctAnswer: 2,
    explanation:
      "Device drivers act as translators between the operating system and hardware devices, enabling the OS to control and communicate with hardware components.",
  },
  {
    id: 15,
    question:
      "Which of the following is NOT a common technique used for software requirement validation?",
    options: [
      "Reviews with stakeholders",
      "Unit testing",
      "User interface mockups",
      "Prototyping",
    ],
    correctAnswer: 1,
    explanation: `Unit testing verifies code implementation, not requirements. Requirement validation techniques include:
- Reviews
- Prototyping
- Use cases
- UI mockups
- Checklists`,
  },
  {
    id: 16,
    question:
      "Which operator is used to increment a variable by a specific value in C++?",
    options: ["=", "++", "+=", "*="],
    correctAnswer: 2,
    explanation: `The += operator adds a value to a variable:
x += 5; // equivalent to x = x + 5
++ is only for incrementing by 1, others are assignment or multiplication assignment.`,
  },
  {
    id: 17,
    question: "Why would a Layer 2 switch need an IP address?",
    options: [
      "To enable the switch to be managed remotely",
      "To enable the switch to receive frames from attached PCs",
      "To enable the switch to send broadcast frames to attached PCs",
      "To enable the switch to function as a default gateway",
    ],
    correctAnswer: 0,
    explanation: `Layer 2 switches operate at MAC layer and don't need IP for switching. An IP is only needed for:
- Remote management (SSH/HTTP)
- SNMP monitoring
- Other management purposes`,
  },
  {
    id: 18,
    question:
      "________________displays the configuration of run-time processing elements and the software components, processes, and objects that live on them",
    options: [
      "Activity Diagram",
      "Deployment Diagram",
      "Class Diagram",
      "Component Diagram",
    ],
    correctAnswer: 1,
    explanation: `Deployment diagrams in UML show:
- Physical hardware nodes
- Software components deployed on them
- Communication paths
They model the system's physical architecture.`,
  },
  {
    id: 19,
    question:
      "Which of the following tags is used to create a hyperlink in HTML?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    correctAnswer: 1,
    explanation: `The <a> (anchor) tag creates hyperlinks:
<a href="url">link text</a>
<link> is for external resources, others are not valid HTML tags.`,
  },
  {
    id: 20,
    question:
      "One of the following is an object created from a class and represents current state?",
    options: ["Class", "Instance", "Property", "Method"],
    correctAnswer: 1,
    explanation: `An instance is a concrete object created from a class blueprint, containing:
- Current property values (state)
- Ability to execute methods
Class is the template, properties/methods are components.`,
  },
  {
    id: 21,
    question: "Which is not the Classification of user interface prototyping?",
    options: [
      "Presentation Prototypes",
      "Bread board",
      "Selecting Prototypes",
      "Pilot systems",
    ],
    correctAnswer: 2,
    explanation: `UI prototyping classifications include:
1. Presentation prototypes (visual mockups)
2. Breadboard (functional but not visual)
3. Pilot systems (fully functional)
'Selecting Prototypes' is not a standard category.`,
  },
  {
    id: 22,
    question:
      "The section of the project management plan that describes management and technical approaches should include the following information:",
    options: [
      "The project names",
      "Project control",
      "The sponsor names",
      "All of the above",
    ],
    correctAnswer: 3,
    explanation: `The management/technical approaches section typically includes:
- Project identification (names)
- Control procedures
- Stakeholder information
- Technical methodologies
- Resource plans`,
  },
  {
    id: 23,
    question:
      "Which of the following is a common use of server-side scripting?",
    options: [
      "Validating user input on the client side",
      "Generating dynamic content based on user input",
      "Styling HTML documents",
      "Managing browser cookies",
    ],
    correctAnswer: 1,
    explanation: `Server-side scripting primarily:
- Processes user input
- Generates dynamic pages
- Accesses databases
- Performs business logic
Client-side handles validation, styling, and cookie management.`,
  },
  {
    id: 24,
    question:
      "Which of the following is a protocol used for transferring web pages on the Internet?",
    options: ["FTP", "HTTP", "SMTP", "SSH"],
    correctAnswer: 1,
    explanation: `HTTP (Hypertext Transfer Protocol) is the foundation of web page transfer. Others:
- FTP: File transfer
- SMTP: Email
- SSH: Secure remote access`,
  },
  {
    id: 25,
    question: "Which of the following is not a built-in data type in C++?",
    options: ["Int", "Float", "String", "Char"],
    correctAnswer: 2,
    explanation: `C++ built-in types include:
- Fundamental: int, float, char, bool
- Compound: arrays, pointers
'string' is a class in the Standard Library, not a built-in type.`,
  },
  {
    id: 26,
    question:
      'A relationship in which the "from" activity or predecessor must finish before the "to" activity or successor can start is called ----------------------------.',
    options: [
      "Finish to start dependency",
      "Start to finish dependency",
      "Finish to finish dependency",
      "All of the above",
    ],
    correctAnswer: 0,
    explanation: `Finish-to-Start (FS) is the most common dependency:
- Activity A must finish before Activity B can start
Other types:
- Start-to-Start (SS)
- Finish-to-Finish (FF)
- Start-to-Finish (SF)`,
  },
  {
    id: 27,
    question:
      "Among the provided options,the layout that arranges its views in a stack order is",
    options: [
      "Relative Layout",
      "Card Layout",
      "Frame Layout",
      "Constraint Layout",
    ],
    correctAnswer: 2,
    explanation:
      "FrameLayout stacks child views on top of each other, with later items appearing above earlier ones. It's useful for overlapping views or single-item containers.",
  },
  {
    id: 28,
    question:
      "In component level design, the functionality that is delivered by a component should be ______________________ that is ,it should focus on one and only one function.",
    options: ["Coupling", "Cohesive", "Information domain", "None"],
    correctAnswer: 1,
    explanation:
      "Cohesion refers to how closely related and focused a component's responsibilities are. High cohesion means a component performs one well-defined function.",
  },
  {
    id: 29,
    question:
      "Which JavaScript method is used to write content into an HTML document?",
    options: [
      "document.write()",
      "document.createElement()",
      "document.appendChild()",
      "document.innerHTML()",
    ],
    correctAnswer: 0,
    explanation:
      "document.write() writes content directly to the document stream. However, it's important to note that in modern JavaScript development, this method is generally avoided because: 1) It replaces all existing content if used after page load, 2) It doesn't work well with asynchronous code, and 3) Modern developers prefer DOM manipulation methods like createElement(), appendChild(), and element.innerHTML property (not a method) for better control and compatibility.",
  },
  {
    id: 30,
    question:
      "Which one of the following is correct about Broadcast Receivers?",
    options: [
      "Broadcast classes are created by extending the super class BroadcastReceiver",
      "Broadcast classes are created by extending the super class BroadcastReceiver and overriding the onReceive method",
      "Broadcast Receivers actively listen for button clicks and respond in GUI",
      "Broadcast receivers are used to handle the GUI events",
    ],
    correctAnswer: 1,
    explanation: `To create a BroadcastReceiver in Android:
1. Extend BroadcastReceiver class
2. Override onReceive() method
3. Register in manifest or dynamically
They respond to system-wide broadcasts, not UI events.`,
  },
  {
    id: 31,
    question:
      "Consider two tuples X and Y, the operation whose result includes tuples that are only in X but not in Y is classified as",
    options: [
      "Union of relation X and Y",
      "Intersection of relation X and Y",
      "Difference of relation X and Y",
      "Square of relation X and Y",
    ],
    correctAnswer: 2,
    explanation: `Relational algebra operations:
- Union (X ∪ Y): All distinct tuples
- Intersection (X ∩ Y): Common tuples
- Difference (X - Y): Tuples only in X
- Cartesian Product (X × Y): All combinations`,
  },
  {
    id: 32,
    question:
      "Given three classes A, B and C, where class C is derived from class B, which is derived from class A. If those classes are public classes and found in different package, then a class C object can access",
    options: [
      "Any data in C and Only Protected and public data in A and B.",
      "Protected, default and public data only in C and B.",
      "Any data in C and only public data in A and B.",
      "Protected, default and public data only in C.",
    ],
    correctAnswer: 2,
    explanation: `Access across packages in Java:
- Public: accessible everywhere
- Protected: only within package or subclasses
- Default: only within package
- Private: only within class
Since in different packages, only public members are accessible.`,
  },
  {
    id: 33,
    question: "In log-based recovery, the log is a sequence of _______",
    options: ["Filter", "Records", "Blocks", "Numbers"],
    correctAnswer: 1,
    explanation: `The recovery log contains records of:
- Transaction start/end
- Data modifications (before/after values)
- Checkpoints
Used for rollback/rollforward recovery.`,
  },
  {
    id: 34,
    question:
      "What is the purpose of thermal paste between a CPU and its heatsink?",
    options: [
      "To improve heat transfer",
      "To protect the CPU from damage",
      "To enhance electrical conductivity",
      "To prevent dust buildup",
    ],
    correctAnswer: 0,
    explanation: `Thermal paste:
- Fills microscopic gaps between CPU and heatsink
- Conducts heat better than air
- Prevents overheating
Non-conductive pastes don't conduct electricity.`,
  },
  {
    id: 35,
    question:
      "The deadlock state can be changed back to stable state by using _______________ statement.",
    options: ["Commit", "Rollback", "Savepoint", "Deadlock"],
    correctAnswer: 1,
    explanation: `Rollback resolves deadlocks by:
- Aborting one transaction
- Undoing its changes
- Releasing all locks
Allowing other transactions to proceed.`,
  },
  {
    id: 36,
    question:
      "The primary function of an information security risk assessment is to_____",
    options: [
      "Identify and evaluate potential threats and vulnerabilities",
      "Implement security controls",
      "Ensure compliance with regulations",
      "Reduce IT operational costs",
    ],
    correctAnswer: 0,
    explanation: `Risk assessment involves:
1. Identifying assets
2. Identifying threats
3. Assessing vulnerabilities
4. Determining risk levels
Implementation and compliance come later.`,
  },
  {
    id: 37,
    question:
      "How does the service password-encryption command enhance password security on Cisco routers and switches?",
    options: [
      "It requires encrypted passwords to be used when connecting remotely to a router or switch with Telnet.",
      "It encrypts passwords that are stored in router or switch configuration files.",
      "It requires that a user type encrypted passwords to gain console access to a router or switch.",
      "It encrypts passwords as they are sent across the network.",
    ],
    correctAnswer: 1,
    explanation: `service password-encryption:
- Encrypts all plaintext passwords in config
- Uses reversible (weak) encryption
- Prevents casual viewing of passwords
Different from SSH which encrypts network traffic.`,
  },
  {
    id: 38,
    question:
      "Which command is used in order to see interface descriptions and speed and duplex settings?",
    options: [
      "Show ip interface brief",
      "Show vlan brief",
      "Show running-config interface",
      "Show ip route",
    ],
    correctAnswer: 0,
    explanation:
      "This question has an incorrect answer. 'show ip interface brief' provides a summary of interfaces with their IP addresses and status, but does NOT show speed, duplex, or descriptions. For detailed interface information including speed and duplex settings, use 'show interfaces' or 'show interfaces status'. For interface descriptions, use 'show interfaces description'.",
  },
  {
    id: 39,
    question:
      "_____ is set of components that mediates interaction between the program and the database",
    options: ["Data Set", "Data Table", "Data Provider", "Data Relation"],
    correctAnswer: 2,
    explanation: `A Data Provider:
- Acts as bridge between application and DB
- Implements interfaces like:
  - Connection
  - Command
  - DataReader
  - DataAdapter`,
  },
  {
    id: 40,
    question:
      "A ________________ is the application of knowledge, skills, tools, and techniques to project activities to meet project requirements.",
    options: [
      "Operation",
      "Project",
      "Project Management",
      "IT project Management",
    ],
    correctAnswer: 2,
    explanation: `Project Management (PMI definition):
- Temporary endeavor
- Creates unique product/service
- Uses specialized knowledge/skills
IT PM is a subset focusing on technology projects.`,
  },
  {
    id: 41,
    question: "How do you identify a faulty RAM module in a computer?",
    options: [
      "Run a memory testing utility",
      "Check the computer's BIOS settings",
      "Inspect the physical RAM modules",
      "All of the above",
    ],
    correctAnswer: 3,
    explanation: `RAM troubleshooting steps:
1. Visual inspection (damage, seating)
2. BIOS check (recognized capacity)
3. Memory diagnostics (Windows Memory Diagnostic/MemTest86)
4. Swap testing (replace modules)`,
  },
  {
    id: 42,
    question: "Runtime polymorphism feature in java is",
    options: [
      "Method overriding",
      "Method overloading",
      "Operator overloading",
      "Constructor overloading",
    ],
    correctAnswer: 0,
    explanation: `Runtime polymorphism (dynamic binding) is achieved through:
- Method overriding
- Late binding at runtime
Method overloading is compile-time polymorphism.`,
  },
  {
    id: 43,
    question:
      "One of the following is a network interface to application functionality based on standard internet technology?",
    options: ["ADO.NET", "ASP.NET", "Web services", "Winforms"],
    correctAnswer: 2,
    explanation: `Web services provide:
- Standardized (SOAP/REST) interfaces
- Platform-independent access
- Internet protocols (HTTP/HTTPS)
Others are Microsoft-specific technologies.`,
  },
  {
    id: 44,
    question: "What is a transaction log in DBMS?",
    options: [
      "A log of all the queries executed on the database",
      "A log of all the locks acquired during transactions",
      "A log of all the database schema changes",
      "A log of all the transactions executed on the database",
    ],
    correctAnswer: 3,
    explanation: `Transaction logs record:
- Transaction boundaries (start/commit/rollback)
- Data modifications
- Enough information for recovery
Critical for ACID properties.`,
  },
  {
    id: 45,
    question:
      "Which one of the following is False about when to use RAD application?",
    options: [
      "Reasonably well-known requirements",
      "User involved throughout the life cycle",
      "Functionality delivered in increments",
      "High performance required",
    ],
    correctAnswer: 3,
    explanation: `RAD (Rapid Application Development) is suitable when:
- Requirements are somewhat flexible
- Fast delivery is crucial
- Users can participate actively
Performance-critical systems often need more rigorous engineering.`,
  },
  {
    id: 46,
    question:
      "_______________________tie together data and behavior into a single unit know as Class.",
    options: ["Data hiding", "Inheritance", "Abstraction", "Encapsulation"],
    correctAnswer: 3,
    explanation: `Encapsulation bundles:
- Data (attributes)
- Methods (behavior)
Into cohesive classes while hiding implementation details.`,
  },
  {
    id: 47,
    question: "Checkpoints are a part of _____ measures.",
    options: ["Authorization", "Concurrency", "Recovery", "Security"],
    correctAnswer: 2,
    explanation: `Checkpoints in DBMS:
- Periodically save database state
- Reduce recovery time
- Mark which transactions are committed
Essential for efficient crash recovery.`,
  },
  {
    id: 48,
    question:
      "________________is the number of tuples participating in a relationship.",
    options: ["Cardinality", "Degree", "Domain", "Set"],
    correctAnswer: 0,
    explanation: `Cardinality describes relationship participation:
- One-to-One
- One-to-Many
- Many-to-Many
Degree refers to number of entities in a relationship.`,
  },
  {
    id: 49,
    question:
      "What is the function of a computer's BIOS (Basic Input/Output System)?",
    options: [
      "To manage the operating system",
      "To provide a user interface",
      "To perform hardware initialization",
      "To control the computer's power",
    ],
    correctAnswer: 2,
    explanation: `BIOS responsibilities:
- POST (Power-On Self-Test)
- Hardware initialization
- Bootloader execution
- Low-level system settings
Now largely replaced by UEFI.`,
  },
  {
    id: 50,
    question: "How can you retrieve a value from a URL parameter in PHP?",
    options: [
      "$_POST['param']",
      "$_GET['param']",
      "$_REQUEST['param']",
      "$_URL['param']",
    ],
    correctAnswer: 1,
    explanation: `URL parameters (after ? in URL) are accessed via:
$_GET array in PHP
$_REQUEST combines GET/POST/COOKIE data
$_POST is for form data sent via POST method`,
  },
  {
    id: 51,
    question: "Three or more devices share a link in ________ connection.",
    options: ["Unipoint", "Multipoint", "Point to point", "Simplex"],
    correctAnswer: 1,
    explanation: `Network connection types:
- Point-to-point: Direct between two nodes
- Multipoint: Shared by multiple devices
- Simplex/Half-duplex/Full-duplex: Directionality`,
  },
  {
    id: 52,
    question: "Which two features of object-oriented programming are the same?",
    options: [
      "Abstraction and Polymorphism features are the same",
      "Inheritance and Encapsulation features are the same",
      "Encapsulation and Polymorphism features are the same",
      "Encapsulation and Abstraction",
    ],
    correctAnswer: 3,
    explanation:
      "Encapsulation and abstraction are closely related concepts that both deal with information hiding. Abstraction focuses on hiding complexity by showing only essential features of an object, while encapsulation is the mechanism that binds data and methods together within a class and restricts direct access to some components. They're not identical but are considered similar because both serve to hide details, manage complexity, and expose only what's necessary to the outside world.",
  },
  {
    id: 53,
    question: "The selection condition of SELECT operator is considered as",
    options: [
      "Row expression",
      "Column expression",
      "String expression",
      "Boolean expression",
    ],
    correctAnswer: 3,
    explanation: `SELECT operation in relational algebra:
σ<condition>(R)
Where condition is a Boolean expression evaluating to true/false for each tuple.`,
  },
  {
    id: 54,
    question:
      "Which one of the following is the IT project integration management processes that involves carrying out the project management plan by performing the activities included in it?",
    options: [
      "Developing the project charter",
      "Developing the project management plan",
      "Directing and controlling the project",
      "All of the above",
    ],
    correctAnswer: 2,
    explanation: `Project Integration Management processes:
1. Develop Project Charter
2. Develop Project Management Plan
3. Direct and Manage Project Work
4. Monitor and Control Project Work
5. Perform Integrated Change Control
6. Close Project or Phase`,
  },
  {
    id: 55,
    question:
      "_____ prototyping is generally limited function, limited interaction prototyping effort.",
    options: [
      "High-fidelity",
      "Low-fidelity",
      "Throw-away",
      "Evolutionary prototyping",
    ],
    correctAnswer: 1,
    explanation: `Prototyping types:
- Low-fidelity: Simple, quick (paper mockups)
- High-fidelity: Closer to final product
- Throw-away: Discarded after validation
- Evolutionary: Becomes final system`,
  },
  {
    id: 56,
    question:
      "Which SQLiteOpenHelper method is used for writing, updating or deleting data?",
    options: [
      "getReadableDatabase()",
      "update()",
      "insert()",
      "getWritableDatabase()",
    ],
    correctAnswer: 3,
    explanation: `SQLiteOpenHelper methods:
- getWritableDatabase(): For write operations
- getReadableDatabase(): For read-only
CRUD operations are performed on the returned SQLiteDatabase object.`,
  },
  {
    id: 57,
    question:
      "A process that helps switch to remove old entries and free memory of MAC address table to add new entries is called?",
    options: ["Formating", "Learning", "Aging", "Flooding"],
    correctAnswer: 2,
    explanation: `MAC address table aging:
- Removes unused entries after aging timer expires
- Prevents table overflow
- Default aging time typically 300 seconds
Learning is the process of adding new entries.`,
  },
  {
    id: 58,
    question:
      "What is the term for an endpoint of an inter-process communication flow across a computer network?",
    options: ["port", "machine", "socket", "pipe"],
    correctAnswer: 2,
    explanation: `A socket is an endpoint for communication consisting of:
- IP address
- Port number
Pipes are for local inter-process communication.`,
  },
  {
    id: 59,
    question:
      "Most backup and recovery commands in _____ are executed by server sessions.",
    options: [
      "Backup Manager",
      "Recovery Manager",
      "Backup and Recovery Manager",
      "Database Manager",
    ],
    correctAnswer: 1,
    explanation: `Oracle's Recovery Manager (RMAN):
- Centralized backup/recovery tool
- Server-managed operations
- Maintains metadata in control file/catalog`,
  },
  {
    id: 60,
    question:
      "Which among the following methods is suitable for displaying notifications?",
    options: [
      "NotificationChannel",
      "NotificationManager",
      "NotificationCompat.Builder",
      "notify(id,b.build())",
    ],
    correctAnswer: 1,
    explanation: `NotificationManager is the system service responsible for displaying notifications to the user. The complete process involves:
1. Get the NotificationManager using context.getSystemService()
2. Create a notification with NotificationCompat.Builder
3. Create a NotificationChannel (for Android 8.0+)
4. Finally call notificationManager.notify(id, notification) to display the notification

While NotificationCompat.Builder builds the notification object and NotificationChannel defines the notification's behavior, NotificationManager is the component that actually displays the notification on screen.`,
  },
  {
    id: 61,
    question:
      "Which statements accurately describe an advantage when deploying NAT for IPv4 in a network?",
    options: [
      "NAT will impact negatively on switch performance.",
      "NAT causes routing tables to include more information.",
      "NAT adds authentication capability to IPv4.",
      "NAT provides a solution to slow down the IPv4 address depletion.",
    ],
    correctAnswer: 3,
    explanation: `NAT (Network Address Translation) benefits:
- Conserves public IPv4 addresses
- Allows many devices to share single public IP
- Adds basic security through hiding internal addresses
Doesn't provide authentication or affect switching.`,
  },
  {
    id: 62,
    question: "Projection of columns in relational algebra operation creates",
    options: [
      "horizontal partitioning",
      "vertical partitioning",
      "combination of attributes",
      "All except C",
    ],
    correctAnswer: 1,
    explanation: `Projection (π):
- Vertical operation
- Selects specific columns
- Eliminates duplicate tuples
Selection (σ) performs horizontal partitioning.`,
  },
  {
    id: 63,
    question: "One of the following is FALSE about form?",
    options: [
      "Form is control placed in user interface element of a windows application.",
      "Form is an area on the screen (usually rectangular) over which you design the user interface of a Windows application.",
      "Form is a control, but it is a special type of control that is both scrollable and capable of acting as a container control.",
      "Windows forms controls are reusable components that encapsulate graphical user interface (GUI) functionality.",
    ],
    correctAnswer: 0,
    explanation:
      "Forms are not controls placed on other UI elements; rather, forms are container objects that host controls. In Windows Forms, a Form is a special type of container that represents a window and provides the foundation for creating the user interface. Controls are placed on forms, not the other way around. Options B, C, and D correctly describe aspects of Windows Forms.",
  },
  {
    id: 64,
    question:
      "Which layer does the data link layer take packets from and encapsulate them into frames for transmission?",
    options: [
      "transport layer",
      "application layer",
      "network layer",
      "physical layer",
    ],
    correctAnswer: 2,
    explanation: `OSI model data flow:
1. Network layer passes packets to data link layer
2. Data link adds header/trailer to create frames
3. Physical layer converts to bits
Opposite process when receiving.`,
  },
  {
    id: 65,
    question: "A key principle of secure system architecture is:",
    options: ["Centralization", "Modularity", "Openness", "Complexity"],
    correctAnswer: 1,
    explanation:
      "Modularity is a key principle of secure system architecture because it allows for separation of concerns, easier maintenance, and better security through compartmentalization. Breaking systems into discrete modules limits the impact of potential breaches.",
  },
  {
    id: 66,
    question: "What is a constant in C++?",
    options: [
      "A fixed value that cannot be changed",
      "A reserved word with predefined meaning",
      "A named storage location that can hold a value",
      "An output produced by a program",
    ],
    correctAnswer: 0,
    explanation:
      "In C++, a constant is a fixed value that cannot be altered during program execution. Constants are declared using the 'const' keyword and provide safety by preventing accidental modifications.",
  },
  {
    id: 67,
    question: "What is the purpose of curly braces ({}) in a C++ program?",
    options: [
      "To define a function",
      "To indicate the beginning and end of a block of code",
      "To declare variables",
      "To provide input to the program",
    ],
    correctAnswer: 1,
    explanation:
      "Curly braces {} in C++ are used to define the scope of code blocks. They mark where a block starts and ends, which is essential for control structures (if, loops), functions, and namespace definitions.",
  },
  {
    id: 68,
    question:
      "In the OSI model, as a data packet moves from the lower to the upper layers, headers are _______",
    options: ["Added", "Removed", "Rearranged", "Randomized"],
    correctAnswer: 1,
    explanation:
      "As data moves up the OSI model layers, each layer removes its own header before passing the data to the next higher layer. This is part of the encapsulation/decapsulation process in network communication.",
  },
  {
    id: 69,
    question:
      "What is the primary difference between include() and require() in PHP?",
    options: [
      "include() will include a file only once, while require() will include it every time it is called",
      "require() will produce a fatal error and stop the script if the file is not found, while include() will only produce a warning",
      "require() is used for including files, include() is used for importing libraries",
      "There is no difference between include() and require()",
    ],
    correctAnswer: 1,
    explanation: `The key difference is error handling:
- require() causes a fatal error if file is missing (stops script)
- include() produces a warning but continues execution
Both functions insert file contents, but require() is stricter for critical dependencies.`,
  },
  {
    id: 70,
    question: "What is the purpose of the address operator (&) in C++?",
    options: [
      "To declare a variable",
      "To access the value of a variable",
      "To assign a value to a variable",
      "To obtain the memory address of a variable",
    ],
    correctAnswer: 3,
    explanation: `The & operator in C++ returns the memory address of a variable (pointer). For example: 
int x = 5;
int* ptr = &x; // ptr now holds memory address of x`,
  },
  {
    id: 71,
    question:
      "Course (Course_Id, Section, Semester), here the Course_Id, Section and Semester are _______ and course is a _______.",
    options: [
      "Relations, Attribute",
      "Attributes, Relation",
      "Attribute, Tuple",
      "Tuple, Attributes",
    ],
    correctAnswer: 1,
    explanation: `In database terminology:
- Course_Id, Section, Semester are attributes (columns)
- Course is the relation (table)
This represents a table structure in relational databases.`,
  },
  {
    id: 72,
    question: "Which of the following best describes a static website?",
    options: [
      "A website that changes its content based on user interactions",
      "A website that does not change its content unless manually updated",
      "A website that uses server-side scripting to generate dynamic content",
      "A website that requires user authentication to access content",
    ],
    correctAnswer: 1,
    explanation: `Static websites:
- Serve pre-built HTML files
- Content remains same for all users
- Changes require manual file updates
- No server-side processing or databases
- Faster loading than dynamic sites`,
  },
  {
    id: 73,
    question:
      "Which one of the following block used to add any code that is always executed regardless of whether or not an exception is thrown?",
    options: ["Finally", "Catch", "Try", "Thrown"],
    correctAnswer: 0,
    explanation: `The finally block in exception handling:
- Executes after try/catch blocks
- Always runs whether exception occurs or not
- Used for cleanup code (closing files, DB connections)
- Syntax: try {...} catch {...} finally {...}`,
  },
  {
    id: 74,
    question:
      "_______ is a device that converts the digital signals generated by a computer into analog signals that can travel over conventional phone lines.",
    options: ["Modem", "Firewall", "Gateway", "Repeater"],
    correctAnswer: 0,
    explanation: `A modem (MOdulator-DEModulator):
- Converts digital to analog for transmission
- Converts analog back to digital on reception
- Essential for dial-up internet connections
- Different types include DSL, cable modems`,
  },
  {
    id: 75,
    question:
      "Among the provided options,the layout that arranges its views in a stack order is",
    options: [
      "Relative Layout",
      "Card Layout",
      "Frame Layout",
      "Constraint Layout",
    ],
    correctAnswer: 2,
    explanation: `Frame Layout in Android:
- Stacks child views on top of each other
- Last added view appears on top
- Useful for overlapping UI elements
- Simple layout for single items or overlapping components`,
  },
  {
    id: 76,
    question:
      "A network administrator is adding a new LAN to a branch office. The new LAN must support 25 connected devices. What is the smallest network mask that the network administrator can use for the new network?",
    options: [
      "255.255.255.224",
      "255.255.255.192",
      "255.255.255.240",
      "255.255.255.128",
    ],
    correctAnswer: 0,
    explanation: `For 25 hosts, we need at least 25 usable IP addresses (plus network and broadcast addresses). The subnet masks correspond to these values:
- 255.255.255.224 = /27 (32 addresses, 30 usable)
- 255.255.255.192 = /26 (64 addresses, 62 usable)
- 255.255.255.240 = /28 (16 addresses, 14 usable)
- 255.255.255.128 = /25 (128 addresses, 126 usable)

Since we need at least 25+2=27 addresses, 255.255.255.240 (/28) is too small (only 16 addresses). 255.255.255.224 (/27) provides 32 addresses (30 usable), which is the smallest subnet that meets the requirement.`,
  },
  {
    id: 77,
    question: "Which information does the show startup-config command display?",
    options: [
      "The IOS image copied into RAM",
      "The bootstrap program in the ROM",
      "The contents of the saved configuration file in the NVRAM",
      "The contents of the current running configuration file in the RAM",
    ],
    correctAnswer: 2,
    explanation: `Cisco router commands:
- 'show startup-config': Displays saved config in NVRAM
- 'show running-config': Current config in RAM
- Startup-config loads when device boots
- Running-config is active configuration`,
  },
  {
    id: 78,
    question:
      "When handling form data in PHP, which attribute of the HTML <form> tag specifies how the form data should be sent to the server?",
    options: ["action", "method", "enctype", "target"],
    correctAnswer: 1,
    explanation: `The method attribute:
- Specifies HTTP request method (GET or POST)
- GET: Data in URL (limited size, visible)
- POST: Data in body (larger size, more secure)
- Example: <form method="post" action="process.php">`,
  },
  {
    id: 79,
    question:
      "Which control statement is used for executing different blocks of code based on multiple conditions?",
    options: [
      "If...else statement",
      "Switch statement",
      "For loop statement",
      "While loop statement",
    ],
    correctAnswer: 1,
    explanation: `Switch statement:
- Evaluates expression once
- Compares value with case labels
- Executes matching case block
- More efficient than multiple if-else for many conditions
- Syntax: switch(expr) { case val1: ... break; default: ... }`,
  },
  {
    id: 80,
    question: "Which of the following statements not true?",
    options: [
      "A private member of a class cannot be accessed by the methods of the same class",
      "A public member of a class can be accessed in all the packages",
      "A private member of a class cannot be accessed from its derived class",
      "A protected member of a class can be accessed from its derived class.",
    ],
    correctAnswer: 0,
    explanation:
      "The statement 'A private member of a class cannot be accessed by the methods of the same class' is false. Private members can indeed be accessed by methods within the same class - that's the fundamental purpose of encapsulation. Methods of a class have full access to all members (including private ones) of that class. The other statements are true: public members are accessible everywhere, private members cannot be accessed from derived classes, and protected members are accessible from derived classes.",
  },
  {
    id: 81,
    question:
      "Which of the following statement is correct, when an overridden method is called from within a subclass?",
    options: [
      "The Compiler will choose randomly the method to be executed",
      "It will always refer to the version of that method defined by the subclass",
      "Compile time error will occur",
      "It will always refer to the version of that method defined by the superclass",
    ],
    correctAnswer: 1,
    explanation: `Method overriding behavior:
- Subclass version is called when overridden
- Runtime polymorphism determines method version
- Superclass method is hidden (unless called via super)
- Example: Animal.sound() vs Dog.sound() - Dog version runs`,
  },
  {
    id: 82,
    question: "Which of the following can be a multivalued attribute?",
    options: ["Email Address", "Gender", "Date-of-birth", "Age"],
    correctAnswer: 0,
    explanation: `Multivalued attributes:
- Can have multiple values for single entity
- Email: person may have multiple addresses
- Others are single-valued (one gender, one DOB, one age)
- In databases, multivalued attributes often require separate tables`,
  },
  {
    id: 83,
    question:
      "If a link transmits 4000 frames per second, and each slot has 8 bits, what is the transmission rate of the circuit using Time Division Multiplexing (TDM)?",
    options: ["500kbps", "32kbps", "32bps", "500bps"],
    correctAnswer: 1,
    explanation: `Calculation:
- Frames/sec × bits/frame = bits/sec
- 4000 frames/sec × 8 bits/frame = 32,000 bits/sec
- Convert to kbps: 32,000 ÷ 1000 = 32 kbps
- TDM divides channel into fixed time slots`,
  },
  {
    id: 84,
    question: "Which of the following is not an OOPS concept?",
    options: ["Encapsulation", "Polymorphism", "Exception", "Abstraction"],
    correctAnswer: 2,
    explanation: `Core OOP concepts:
1. Encapsulation (data hiding)
2. Inheritance
3. Polymorphism
4. Abstraction
Exception handling is a programming feature but not an OOP fundamental concept`,
  },
  {
    id: 85,
    question: "Which method is used to stop a bound service?",
    options: ["System.exit(0)", "selfStop()", "stopService()", "None"],
    correctAnswer: 3,
    explanation:
      "None of the options are correct for stopping a bound service in Android. A bound service is stopped when all clients unbind from it by calling unbindService(). When all bindings are released, the system destroys the service unless it was also started with startService(). The stopService() method is used for started services, not specifically for bound services. System.exit(0) forcibly terminates the entire application, and selfStop() is not a standard Android method.",
  },
  {
    id: 86,
    question: "_______ is an essential part of any backup system.",
    options: ["Filter", "Recovery", "Security", "Scalability"],
    correctAnswer: 1,
    explanation: `Backup systems require:
- Recovery mechanism to restore data
- Without recovery, backups are useless
- Should regularly test recovery process
- Includes both data and system recovery`,
  },
  {
    id: 87,
    question:
      "Which attribute of the HTML <form> tag specifies the URL of the page that will process the form data?",
    options: ["action", "method", "enctype", "target"],
    correctAnswer: 0,
    explanation: `The action attribute:
- Specifies where to send form data
- Typically a server-side script (PHP, ASP, etc.)
- Can be relative or absolute URL
- Example: <form action="process.php" method="post">`,
  },
  {
    id: 88,
    question:
      "_______ is sequence of bytes traveling from a source to a destination over a communication path?",
    options: ["File", "Stream", "Record", "Field"],
    correctAnswer: 1,
    explanation: `Stream characteristics:
- Continuous flow of data bytes
- Can represent various data types
- Supports sequential access
- Used in networking, file I/O operations
- Can be input or output streams`,
  },
  {
    id: 89,
    question:
      "A USB port can connect upto_______different peripherals together with single connector?",
    options: ["125", "126", "127", "128"],
    correctAnswer: 2,
    explanation: `USB specifications:
- Theoretical limit of 127 devices per host controller
- Achieved through USB hubs
- Address range is 1-127 (0 reserved for host)
- Practical limits may be lower due to power constraints`,
  },
  {
    id: 90,
    question: "How do you troubleshoot a computer that fails to boot up?",
    options: [
      "Check the monitor and keyboard",
      "Run a virus scan",
      "Check the power supply, RAM, and boot device",
      "All of the above",
    ],
    correctAnswer: 3,
    explanation: `Boot failure troubleshooting steps:
1. Verify power supply and connections
2. Check display and input devices
3. Test RAM modules
4. Verify boot device (HDD/SSD)
5. Listen for beep codes
6. Check BIOS settings
7. Run hardware diagnostics`,
  },
  {
    id: 91,
    question:
      "Which loop statement is guaranteed to execute its body at least once?",
    options: [
      "If...else statement",
      "Switch statement",
      "For loop statement",
      "Do...while statement",
    ],
    correctAnswer: 3,
    explanation: `Do...while loop:
- Executes body before checking condition
- Always runs at least once
- Syntax: do { ... } while (condition);
- Contrast with while loop which may never execute`,
  },
  {
    id: 92,
    question: "What is the correct way to start a PHP block of code?",
    options: ["<?php ?>", "<php ?>", "<% %>", "<script php>"],
    correctAnswer: 0,
    explanation: `PHP code blocks:
- Standard opening tag: <?php
- Short tags: <? (needs configuration)
- ASP-style: <% (deprecated)
- Always use full <?php for compatibility
- Closing tag: ?> (optional in pure PHP files)`,
  },
  {
    id: 93,
    question: "What does the CSS property margin do?",
    options: [
      "Sets the space inside the border of an element",
      "Sets the space outside the border of an element",
      "Sets the thickness of an element's border",
      "Sets the background color of an element",
    ],
    correctAnswer: 1,
    explanation: `CSS box model components:
- Margin: Space outside border (between elements)
- Border: Line around padding
- Padding: Space inside border (around content)
- Content: Actual element content
Margin creates space between elements`,
  },
  {
    id: 94,
    question:
      "Which among the following methods is suitable for storing an integer data in a shared preference file?",
    options: ["put(key,2)", 'put(key,"2")', "putInt(key,2)", 'putInt(key,"2")'],
    correctAnswer: 2,
    explanation: `Android SharedPreferences methods:
- putInt() stores integer values
- putString() for text
- putBoolean() for true/false
- Example: editor.putInt("count", 5).apply()
- Retrieval: getInt("count", defaultValue)`,
  },
  {
    id: 95,
    question:
      "Which of the following processes that is not involved in project scope management?",
    options: [
      "Resource estimation",
      "Expert judgment",
      "Product analysis",
      "Facilitated workshops",
    ],
    correctAnswer: 0,
    explanation: `Project scope management processes:
1. Plan Scope Management
2. Collect Requirements
3. Define Scope
4. Create WBS
5. Validate Scope
6. Control Scope
Resource estimation is part of cost/time management`,
  },
  {
    id: 96,
    question: "What is the purpose of a function in programming?",
    options: [
      "To declare variables",
      "To perform arithmetic operations",
      "To define the program's structure",
      "To encapsulate a set of instructions for reuse",
    ],
    correctAnswer: 3,
    explanation: `Functions provide:
- Code reuse (call multiple times)
- Modularity (break into logical units)
- Abstraction (hide implementation)
- Parameterization (accept inputs)
- Return values (provide outputs)
- Easier debugging and maintenance`,
  },
  {
    id: 97,
    question:
      "Which of the following layers is an addition to OSI model when compared with TCP IP model?",
    options: [
      "Application layer",
      "Network layer",
      "Transport layer",
      "Session and Presentation layer",
    ],
    correctAnswer: 3,
    explanation: `OSI (7 layers) vs TCP/IP (4 layers):
OSI adds:
- Session layer (manages connections)
- Presentation layer (data translation/encryption)
TCP/IP combines these into Application layer
Both have: Network, Transport, Application concepts`,
  },
  {
    id: 98,
    question:
      "Objects that contain the same types of values and the same methods are grouped into _______.",
    options: [
      "One tuples from one relation",
      "Zero tuples and empty relation",
      "Zero tuples from two relation",
      "Two tuples from empty relation",
    ],
    correctAnswer: 1,
    explanation:
      "This question appears to have a mismatch between the question stem and the options. The question asks about grouping objects with similar properties (which would be classes in OOP), while the options refer to relational database concepts. If interpreting in the context of relational databases, an empty relation (with zero tuples) is a valid relation that has a defined schema but contains no data rows. However, the fundamental answer to the original question would be 'classes' in object-oriented programming.",
  },
  {
    id: 99,
    question:
      "_______ is the total direct and indirect costs incurred in accomplishing work on an activity during a given period.",
    options: [
      "The actual cost",
      "The earned value",
      "Planned value",
      "All of the above",
    ],
    correctAnswer: 0,
    explanation: `Project cost terms:
- Actual Cost (AC): Real money spent
- Earned Value (EV): Value of work completed
- Planned Value (PV): Budgeted cost of work
- AC measures actual expenditure regardless of progress`,
  },
  {
    id: 100,
    question: "What is the primary purpose of a computer power supply?",
    options: [
      "To convert AC to DC",
      "To provide storage for the computer",
      "To cool the internal components",
      "To manage the computer's input/output",
    ],
    correctAnswer: 0,
    explanation: `Power Supply Unit (PSU) functions:
- Converts AC wall power to DC voltages
- Provides +3.3V, +5V, +12V etc.
- Regulates power to components
- Includes safety features (overvoltage protection)
- Cooling is handled by fans/heat sinks`,
  },
];
