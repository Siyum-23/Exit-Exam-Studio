[{
    id: 1,
    question: "Project team has decided to use competent project personnel, using various analysis and validation techniques, and buying maintenance or service agreements from subcontractors. Which negative risk response strategy is the team using?",
    options: ["Risk acceptance", "Risk mitigation", "Risk shifting", "Risk avoidance"],
    correctAnswer: 1,
    explanation: "The team is using risk mitigation by employing competent personnel and service agreements to reduce the probability/impact of risks."
}, {
    id: 2,
    question: "Identify a protocol that controls the manner in which Web pages are transferred back and forth between systems.",
    options: ["World Wide Web (WWW)", "File Transfer Protocol (FTP)", "Hypertext Transfer Protocol (HTTP)", "Extensible Markup Language (XML)"],
    correctAnswer: 2,
    explanation: "HTTP is the protocol specifically designed for transferring web pages between servers and clients."
}, {
    id: 3,
    question: "Each value in a tuple must be an atomic in a relation, which one is the correct database design concept applied to avoid if composite attributes exists in relational model?",
    options: ["Composite attributes are denoted by separate relations", "Multivalued attributes must be denoted by their simple component attributes", "Multivalued attributes must be denoted along with the key attribute", "Composite attributes are denoted by their simple component attributes"],
    correctAnswer: 3,
    explanation: "In relational database design, composite attributes should be broken down into their simple (atomic) component attributes to satisfy 1NF."
}, {
    id: 4,
    question: "What tags are required for an HTML page?",
    options: ["html, head, body, foot", "html, head, body", "html, head", "No tags are required"],
    correctAnswer: 1,
    explanation: "The minimum required tags for a valid HTML document are <html>, <head>, and <body>. The 'foot' tag doesn't exist in standard HTML. While modern browsers might render pages with missing required tags, they're technically required for valid HTML."
}, {
    id: 5,
    question: "One of the following can categorizes as a collection of principles that form the foundation of object-oriented design?",
    options: ["object model", "object structure", "module diagram", "object diagram"],
    correctAnswer: 0,
    explanation: "The object model is the conceptual framework for object-oriented programming, containing principles like encapsulation, inheritance, and polymorphism."
}, {
    id: 6,
    question: "In Linux, user's encrypted password is kept in.",
    options: ["/etc/shadow", "/etc/enpasswwd", "/etc/passwd", "/etc/.passwd"],
    correctAnswer: 0,
    explanation: "Modern Linux systems store encrypted passwords in /etc/shadow for security, while /etc/passwd contains user information without passwords."
}, {
    id: 7,
    question: "Which of the following is correct about the Transmission Control Protocol (TCP)?",
    options: ["TCP allows for error detection and correction.", "TCP allows for retransmission of lost segments.", "TCP is faster than UDP.", "TCP is a connectionless protocol."],
    correctAnswer: 1,
    explanation: "TCP provides reliable communication through features like error detection and retransmission of lost segments. Unlike UDP which is connectionless, TCP is connection-oriented and ensures data delivery through acknowledgments and retransmission of lost packets."
}, {
    id: 8,
    question: "You can define a new class from an existing class. The new class is called",
    options: ["Superclass", "Parent class", "Base class", "Extended class"],
    correctAnswer: 3,
    explanation: "In object-oriented programming, when you create a new class from an existing one, it's called an extended class or subclass."
}, {
    id: 9,
    question: "Which of the following is an element of object-oriented paradigm that does not used to solve any problem?",
    options: ["functional decomposition", "organization", "abstraction"],
    correctAnswer: 0,
    explanation: "Functional decomposition is a procedural programming concept, not an object-oriented principle."
}, {
    id: 10,
    question: "The data model that develop a database as a collection of tables, where each table can be stored as a separate file.",
    options: ["Object data model", "Hierarchical model", "Relational data model", "Object-relational model"],
    correctAnswer: 2,
    explanation: "The relational model organizes data into tables (relations) which can be stored separately."
}, {
    id: 11,
    question: "The reusable portion of the app's UI is referred to as",
    options: ["Activity", "Fragment", "Adapter", "File"],
    correctAnswer: 1,
    explanation: "In Android development, Fragments represent reusable portions of UI that can be combined in Activities."
}, {
    id: 12,
    question: "The conditional statement Not (x >= 5) returns true if the value of x = ?",
    options: ["5", "4", "7", "5.001"],
    correctAnswer: 1,
    explanation: "Not(x >= 5) is true when x is less than 5, so x=4 satisfies this condition."
}, {
    id: 13,
    question: "What is the default bridge priority for all STP switches?",
    options: ["Bridge priority of 16,384", "Bridge priority of 32,768", "Bridge priority of 8,192", "Bridge priority of 65,526"],
    correctAnswer: 1,
    explanation: "The default bridge priority in Spanning Tree Protocol (STP) is 32,768."
}, {
    id: 14,
    question: `What will the following Java program produce?

class Result {
  public static void main(String args[]) {
    try {
      int a = 0;
      int b = 5;
      int c = b / a;
      System.out.print("Information");
    } catch(Exception e) {
      System.out.print("Technology");
    }
  }
}`,
    options: ["Information", "Technology", "Information Technology", "Compilation Error"],
    correctAnswer: 1,
    explanation: 'The code will throw an ArithmeticException (division by zero) and execute the catch block, printing "Technology".'
}, {
    id: 15,
    question: "A systems in which it may make sense to use traditional file processing, instead of a database approach",
    options: ["Embedded systems with unlimited storage capacity", "Applications that are not expected to change at all", "Programs that meet DBMS overhead", "Multiple-user access to data"],
    correctAnswer: 1,
    explanation: "Simple, unchanging applications might not need the complexity of a DBMS and can use file processing."
}, {
    id: 16,
    question: "Which one of the following project scope management processes is a crucial part of many IT projects?",
    options: ["Collecting requirement", "Validating the scope", "Planning scope management", "Defining scope"],
    correctAnswer: 0,
    explanation: "Collecting requirements is fundamental to IT projects to ensure the developed system meets user needs."
}, {
    id: 17,
    question: "The function procedures are by default.",
    options: ["inherited", "Private", "Public", "Protected"],
    correctAnswer: 2,
    explanation: "In most programming languages, functions/procedures are public by default unless specified otherwise."
}, {
    id: 18,
    question: "is a property of a transaction which ensures changes must not be lost because of any failure.",
    options: ["Consistency Preservation", "Isolation", "Atomicity", "Durability or permanency"],
    correctAnswer: 3,
    explanation: "Durability in ACID properties ensures committed transactions persist even after system failures."
}, {
    id: 19,
    question: "Unsolicited commercial email is known as",
    options: ["Spam", "Virus", "Adware", "Malware"],
    correctAnswer: 0,
    explanation: "Unsolicited bulk emails are commonly referred to as spam."
}, {
    id: 20,
    question: "indicates the maximum number of relationship that an entity instance can participate in a binary relationship.",
    options: ["Existence dependencies.", "Cardinality ratio", "Degree", "Participation"],
    correctAnswer: 1,
    explanation: "Cardinality ratio specifies the maximum number of relationship instances an entity can participate in."
}, {
    id: 21,
    question: "Which of the following is a type of independent malicious program that never required any host program?",
    options: ["Trap Door", "Trojan Horse", "Worm", "Virus"],
    correctAnswer: 2,
    explanation: "Worms are standalone malware that don't need to attach to a host program."
}, {
    id: 22,
    question: "SetFocus is a method which moves the focus to the specified control or form.",
    options: ["getfocus", "gotfocus", "lostfocus", "setfocus"],
    correctAnswer: 3,
    explanation: "SetFocus is the method used to move input focus to a specific control in many programming frameworks."
}, {
    id: 23,
    question: "Content Provider enables sending of data from an application to another application",
    options: ["Content Provider", "File", "Broadcast Receivers", "Adapter"],
    correctAnswer: 0,
    explanation: "In Android, Content Providers enable data sharing between applications."
}, {
    id: 24,
    question: `Consider the following database table called Drinks, it has three columns (Name, Type, and Price):

| Drinks      | Type          | Price |
|-------------|---------------|-------|
| Pepsi       | Soft Drink    | 35    |
| Tea         | Hot Beverage  | 25    |
| Coca cola   | Soft Drink    | 35    |

Which SQL statement shows the total number of soft drinks?`,
    options: ["SELECT COUNT(*) FROM Drinks WHERE Type= 'Soft Drink'", "SELECT Type FROM DRINKS WHERE SUM()", "SELECT Name, Type, Price FROM Drinks WHERE Type='Soft Drinks' and SUM()", "SELECT * FROM Drinks WHERE ADD()"],
    correctAnswer: 0,
    explanation: "To count the number of soft drinks, use COUNT(*) with a WHERE clause filtering for the 'Soft Drink' type. The other options have syntax errors or incorrect function usage."
}, {
    id: 25,
    question: "Which tool can be utilized to examine a packet capture?",
    options: ["RSPAN", "SPAN", "Netflow", "Wireshark"],
    correctAnswer: 3,
    explanation: "Wireshark is a popular network protocol analyzer for examining packet captures."
}, {
    id: 26,
    question: "Which of the communication modes support two way traffic but in only one direction of a time?",
    options: ["Three-quarter's duplex", "Simplex", "Half-duplex", "Full duplex"],
    correctAnswer: 2,
    explanation: "Half-duplex allows two-way communication but only one direction at a time (like walkie-talkies)."
}, {
    id: 27,
    question: "In what circumstances does the EIGRP protocol advertise the whole database?",
    options: ["Every 30 seconds", "When a route update is sent", "Every 5 seconds", "Upon forming an adjacency"],
    correctAnswer: 3,
    explanation: "EIGRP sends full routing table only when establishing adjacency with a new neighbor."
}, {
    id: 28,
    question: "Which one of the following project quality management involves evaluating overall project performance relevant to quality standards?",
    options: ["performing quality assurance.", "controlling quality", "planning quality management", "initiating quality management"],
    correctAnswer: 0,
    explanation: "Quality assurance involves evaluating overall performance against quality standards."
}, {
    id: 29,
    question: "For every enum, the compiler generates a static method called that returns an array of the enum's constants in the order in which they were declared.",
    options: ["garbage", "final", "values"],
    correctAnswer: 2,
    explanation: "The values() method is automatically generated for enums to return all constants."
}, {
    id: 30,
    question: "Which routing method uses the least amount of RAM on the router?",
    options: ["Default routing", "RIP routing", "Static routing", "OSPF routing"],
    correctAnswer: 2,
    explanation: "Static routing consumes minimal RAM as it doesn't maintain routing tables or neighbor relationships."
}, {
    id: 31,
    question: "select TCP/IP Protocol for the remote terminal connection service.",
    options: ["RARP", "UDP", "TELNET", "FTP"],
    correctAnswer: 2,
    explanation: "TELNET is the TCP/IP protocol specifically designed for remote terminal connections."
}, {
    id: 32,
    question: "One of the following is not a valid way to alter the size of an element?",
    options: ["div{height: 50cm; width: 50px;}", "div{height: 50px; width: 50%;}", "div{height: 50ft; width: 50ft;}", "div{height: 50px; width: 50px;}"],
    correctAnswer: 2,
    explanation: `"ft" is not a valid CSS unit for sizing elements. Valid CSS units include px, em, rem, %, cm, etc. Additionally, option B had a syntax error in the original question with a missing colon after 'height'.`
}, {
    id: 33,
    question: "Which of the subsequent operators creates instances of exceptions that can be thrown using throw?",
    options: ["thrown", "alloc", "malloc", "new"],
    correctAnswer: 3,
    explanation: "The 'new' operator is used to create exception objects that can be thrown."
}, {
    id: 34,
    question: "The maximum distance that 1000Base-T supports is",
    options: ["1,000 feet", "100 meters", "1,000 meters", "100 feet"],
    correctAnswer: 1,
    explanation: "1000Base-T (Gigabit Ethernet over copper) has a maximum segment length of 100 meters."
}, {
    id: 35,
    question: "Keywords in Visual Basic are words that",
    options: ["Are used to name controls, such as TextBox1, Command1 etc.", "Are used as prefixes for control names (such as btn, lbl, and lst).", "Should be used when naming variables.", "Have special meaning and should not be used when naming variables."],
    correctAnswer: 3,
    explanation: "Keywords in VB have special meaning (like Dim, Sub, Function) and shouldn't be used as variable names."
}, {
    id: 36,
    question: "Which of the following is not considered a system component that can be found inside a computer?",
    options: ["CPU", "Motherboard", "PCIe graphics adapter", "RAM"],
    correctAnswer: 2,
    explanation: "While a PCIe graphics adapter is an important component, it's an expansion card that can be added/removed, not considered one of the core/essential system components like CPU, motherboard, and RAM that are required for a computer to function at the most basic level."
}, {
    id: 37,
    question: "Which command is wrong to add a new user to the system?",
    options: ["Linuxconf", "adduser", "useradd", "addLinux"],
    correctAnswer: 3,
    explanation: '"addLinux" is not a standard Linux command for adding users.'
}, {
    id: 38,
    question: "In the name http://moe.edu.et/news.html, the moe.edu.et part is called.",
    options: ["Protocol name", "Host name", "Port number", "Path name"],
    correctAnswer: 1,
    explanation: "moe.edu.et is the hostname (domain name) portion of the URL."
}, {
    id: 39,
    question: "Which of the following statements is not true?",
    options: ["A class that extends the Thread class can create a thread", "Only by implementing the Runnable interface may a thread be created", "In specific circumstances, the run() method is used before the start() method to start a thread", "The thread's execution is started using the start() method"],
    correctAnswer: 1,
    explanation: "Threads can be created both by extending Thread class or implementing Runnable interface."
}, {
    id: 40,
    question: "decides the priority of the thread execution.",
    options: ["Thread", "Thread scheduler", "Process scheduler", "Process"],
    correctAnswer: 1,
    explanation: "The thread scheduler determines which thread gets CPU time based on priorities."
}, {
    id: 41,
    question: "Which of the following is a valid code to delete cookie named user?",
    options: ['setcookie(user,"", time()-3600);', "$_COOKIE['user']=0;", "unset($_COOKIE['user']);", "setcookie(user, '', expire=True);"],
    correctAnswer: 0,
    explanation: "In PHP, setting cookie with past expiration time (time()-3600) effectively deletes it."
}, {
    id: 42,
    question: `What will the following script output?
<?php
$array=array(1,3,5,8,13,21,34,55);
$sum=0;
for($i=0; $i<5; $i++){
  $sum+=$array[$array[$i]];
}
echo $sum;
?>`,
    options: ["78", "98", "8", "13"],
    correctAnswer: 0,
    explanation: "The script calculates: $array[$array[0]]=array[1]=3, $array[$array[1]]=array[3]=8, $array[$array[2]]=array[5]=21, $array[$array[3]]=array[8]=34, $array[$array[4]]=array[13]=12 (last index is undefined in the array, which PHP treats as 0 or null depending on version). So 3+8+21+34+12=78."
}, {
    id: 43,
    question: "Consider a design of web form to upload your assignment which has no limit to the size of its content. Which method will be used for this functionality?",
    options: ["PUT", "POST", "GET", "HEAD"],
    correctAnswer: 1,
    explanation: "POST method is used for submitting data, especially large amounts like file uploads."
}, {
    id: 44,
    question: "You are installing a new power supply in a desktop computer. Which of the following statements about power supplies is true?",
    options: ["Power supplies convert AC input to DC output", "You must make sure that the voltage selector switch on the back of the power supply is switched to the lower setting if the computer is going to be used in Europe.", "Power supplies require a 20-pin to 24-pin motherboard adapter to supply power to ATX-based motherboards.", "SATA hard drives most often use the same type of power connector that PATA hard drives use."],
    correctAnswer: 0,
    explanation: "Computer power supplies convert AC wall current to various DC voltages needed by components."
}, {
    id: 45,
    question: "TCP/IP layer corresponds to the three top layers of OSI reference model layers.",
    options: ["Session", "Presentation", "Transport", "Application"],
    correctAnswer: 3,
    explanation: "The TCP/IP Application layer corresponds to OSI's Application, Presentation, and Session layers."
}, {
    id: 46,
    question: "In public key encryption system, if A encrypts a message using his private key and sends it to B. Which statement will be true?",
    options: ["Even if B knows who sent the message it cannot be decrypted", "It cannot be decrypted at all as no one knows A's private key", "If B knows it is from A he can decrypt it using A's public key", "A should send his public key with the message"],
    correctAnswer: 2,
    explanation: "Messages encrypted with private key can be decrypted with corresponding public key (used for digital signatures)."
}, {
    id: 47,
    question: "Which layer is responsible for compression and decompression?",
    options: ["Application layer", "Physical layer", "Presentation layer", "Session layer"],
    correctAnswer: 2,
    explanation: "The Presentation layer (OSI Layer 6) handles data translation including compression/decompression."
}, {
    id: 48,
    question: "Which HTML tag is used to define an internal style sheet?",
    options: ["<script>", "<css>", "<link>", "<style>"],
    correctAnswer: 3,
    explanation: "<style> tags are used for internal CSS within an HTML document."
}, {
    id: 49,
    question: "Which of the following is NOT typically outlined as a security practice for personal computer users?",
    options: ["Use antivirus software", "Use strong passwords", "Implement a regular backup procedure", "Update product security"],
    correctAnswer: 3,
    explanation: "While updating product security is important, it's often handled through automatic updates by vendors rather than being emphasized as a primary user security practice like using antivirus, strong passwords, and backups. This answer is subjective and may vary based on different security frameworks."
}, {
    id: 50,
    question: "Which type of cable would be used to connect a computer to a switch for management of the switch?",
    options: ["Crossover cable", "Shielded cable", "Rolled cable", "Straight-through cable"],
    correctAnswer: 2,
    explanation: "Rollover/console cables are used for switch management via console ports."
}, {
    id: 51,
    question: "Create a textbox which accepts a maximum of 20 character with default value 'Mango'",
    options: ["<input type='text' size='20' value='Mango'>", "<input type='text' maxlength ='20' defaults 'Mango'>", "<input type='text' size='20 ' default='Mango'>", "<input type='text' maxlength='20' value='Mango'>"],
    correctAnswer: 3,
    explanation: "maxlength limits input to 20 chars, value sets default text. Other options have syntax errors."
}, {
    id: 52,
    question: "control events to execute at a specified intervals of time.",
    options: ["Clock", "Digital", "Frame", "Timer"],
    correctAnswer: 3,
    explanation: "Timer controls are used to trigger events at regular intervals in programming."
}, {
    id: 53,
    question: `Asc('A') is 65. What is the output of txtBox.Text = Chr(65) & "BC"?`,
    options: ["A BC", "656667", "Not enough information is available.", "ABC"],
    correctAnswer: 3,
    explanation: "Chr(65) returns 'A', concatenated with 'BC' gives 'ABC'."
}, {
    id: 54,
    question: "Which of the following variable is invalid?",
    options: ["$blah", "$11f", "$f11", "$J If"],
    correctAnswer: 3,
    explanation: "Variable names cannot contain spaces. '$J If' is invalid."
}, {
    id: 55,
    question: "present an outside view on the manner that the elements in a system behave and how they can be used in the context.",
    options: ["Activity Diagrams", "Collaboration Diagrams", "Use case diagrams", "Sequence Diagrams"],
    correctAnswer: 2,
    explanation: "Use case diagrams show system functionality from an external/user perspective."
}, {
    id: 56,
    question: `Examine the following code and select the correct option.

public class Building {
  public int height;
  public void setHeight(int newHeight) {
    if (newHeight <= 100)
      height = newHeight;
  }
}`,
    options: ["The height of a Building can never be set to more than 100", "The preceding code is an example of a well-encapsulated class", "The class would be better encapsulated if the height validation weren't set to 100", "Even though the class isn't well encapsulated, it can be inherited by other classes"],
    correctAnswer: 0,
    explanation: "The setHeight method enforces that height cannot exceed 100."
}, {
    id: 57,
    question: "A candidate key that is chosen by the database designer as the principal means to identify a particular entity from an entity set is called.",
    options: ["Foreign key", "Primary key", "Candidate key", "Super key"],
    correctAnswer: 1,
    explanation: "The primary key is the selected candidate key used to uniquely identify records."
}, {
    id: 58,
    question: "Which of the following types of processors will likely, generally, be preferred for mobile devices?",
    options: ["x64", "ARM", "LGA", "x86"],
    correctAnswer: 1,
    explanation: "ARM processors dominate mobile devices due to power efficiency."
}, {
    id: 59,
    question: "Which iterative control can guarantee the code to be processed at least once?",
    options: ["while loop", "for...in loop", "for loop", "do...while loop"],
    correctAnswer: 3,
    explanation: "do...while checks condition after execution, ensuring at least one iteration."
}, {
    id: 60,
    question: "Which of the following Linux command is appropriate to change the user password?",
    options: ["pwd", "passd", "user can't change the password", "passwd"],
    correctAnswer: 3,
    explanation: "passwd is the standard Linux command for changing passwords."
}, {
    id: 61,
    question: "Why routing tables used administrative distances?",
    options: ["Administrative distances define reliability of routing protocols", "Administrative distances allow for the shortest distance between routes", "Administrative distances are programmed by the administrator for path selection", "Administrative distances define protocol standards"],
    correctAnswer: 0,
    explanation: "Administrative distance indicates route trustworthiness (lower = more reliable)."
}, {
    id: 62,
    question: "Which of the following doesn't assign the value 'Hello' to a variable named 'greeting', given that the variable named 'Welcome' already contains 'Hello'?",
    options: ["greeting=welcome;", '"Hello"=greeting', 'var greeting = "Hello"', 'greeting="Hello"'],
    correctAnswer: 1,
    explanation: "This is invalid syntax - cannot assign to a string literal."
}, {
    id: 63,
    question: "Which one of the following abstractions examines an object that provides a generalized set of operations, all of which perform the same kind of function?",
    options: ["Action abstraction", "Virtual machine abstraction", "Coincidental abstraction", "Entity abstraction"],
    correctAnswer: 1,
    explanation: "Virtual machine abstraction groups operations that perform similar functions."
}, {
    id: 64,
    question: "The proper order of OSI reference model layers are. (from higher to lower)",
    options: ["Application, Presentation, Transport, Network, Session, Data link, Physical", "Presentation, Application, Session, Transport, Network, Data Link, Physical", "Application, Presentation, Session, Transport, Network, Data Link, Physical", "Application, Transport, Session, Presentation, Network, Data Link, Physical"],
    correctAnswer: 2,
    explanation: "Correct OSI layers from top: Application, Presentation, Session, Transport, Network, Data Link, Physical."
}, {
    id: 65,
    question: "Which of the following is not necessary to demonstrate before you run a Java program?",
    options: ["Compile programming statements to machine language.", "Write program statements that correspond to the logic.", "Save the file as a .java", "Debugging process"],
    correctAnswer: 3,
    explanation: "Debugging is optional, while the other steps are required to run a Java program."
}, {
    id: 66,
    question: "The process by which the processor slows down to conserve power is officially called",
    options: ["Throttling", "Underclocking", "Disengaging", "Cooling"],
    correctAnswer: 0,
    explanation: "CPU throttling reduces clock speed to save power/heat."
}, {
    id: 67,
    question: "Which of the following statement is true regarding HTML, CSS and JavaScript?",
    options: ["CSS is for structuring as HTML is for styling", "HTML is for structuring as JavaScript is for behavior/functionality", "CSS is for structuring, HTML for styling and JavaScript is for behavior/Functionality", "CSS is for styling, HTML for structuring and JavaScript is for behavior/Functionality"],
    correctAnswer: 3,
    explanation: "HTML structures content, CSS styles it, JavaScript adds behavior."
}, {
    id: 68,
    question: "creates thread and calls the code written inside run method.",
    options: ["Start() method", "begin() method", "call() method", "main() method"],
    correctAnswer: 0,
    explanation: "start() initiates thread execution, which calls run()."
}, {
    id: 69,
    question: "All layouts, Applications, and Activities Information in Androids are found in .",
    options: ["Manifest XML", "Activity", "MainActivity", "activity.main.xml"],
    correctAnswer: 0,
    explanation: "AndroidManifest.xml contains app metadata including activities and permissions."
}, {
    id: 70,
    question: "What cost estimating technique used to estimate project costs, in mathematical model project characteristics?",
    options: ["parametric modeling", "fast-track estimating", "analogous estimating", "critical chain"],
    correctAnswer: 0,
    explanation: "Parametric modeling uses mathematical models based on project parameters."
}, {
    id: 71,
    question: "Identify the wrong statement regarding variables in android application development.",
    options: ["To access characters directly as numbers we can toInt() function", "Variables defined as var is an object whose state cannot be changed after instantiation", "A String can be accessed as an array and can be iterated", "There are no automatic conversions among numeric types"],
    correctAnswer: 1,
    explanation: "In Kotlin for Android, 'var' variables are mutable (can be changed), while 'val' variables are immutable (cannot be changed after initialization). The statement incorrectly describes 'var' as immutable, which is false."
}, {
    id: 72,
    question: "Which type of port removes the VLAN ID from the frame before it egresses the interface?",
    options: ["Trunk port", "Native port", "Voice port", "Access port"],
    correctAnswer: 3,
    explanation: "Access ports strip VLAN tags as they connect to end devices."
}, {
    id: 73,
    question: "A flaw or weakness in an information asset, security procedure, design, or control that could be exploited accidentally or on purpose to breach security is known as",
    options: ["Risk", "Threat", "Vulnerability", "Attack"],
    correctAnswer: 2,
    explanation: "A vulnerability is a weakness that could be exploited."
}, {
    id: 74,
    question: "Among the following, which class can handle all exceptions that cannot be handled?",
    options: ["ParentException", "Exception", "RuntimeException", "Error"],
    correctAnswer: 3,
    explanation: "The Error class represents serious problems that a reasonable application should not try to catch. Exception is the superclass for exceptions that can be handled, while Error is for unrecoverable conditions."
}, {
    id: 75,
    question: "layer is used/responsible in the three-tier model where collision Learning Domains should be created.",
    options: ["Distribution layer", "Core layer", "Access layer", "Routing layer"],
    correctAnswer: 2,
    explanation: "Access layer handles collision domains in three-tier network design."
}, {
    id: 76,
    question: `How can the index.php script access the email from element of the following HTML form?
<form action='index.php' method='post'>
  <input type='text' name='email'>
</form>`,
    options: ["$_GET['email']", "$_POST['email']", "$_SESSION['email']", "$_EMAIL['text']"],
    correctAnswer: 1,
    explanation: "With method='post', data is accessed via $_POST superglobal."
}, {
    id: 77,
    question: "FDDI used type of physical topology.",
    options: ["Star", "Ring", "Tree", "Bus"],
    correctAnswer: 1,
    explanation: "Fiber Distributed Data Interface (FDDI) uses a dual ring topology."
}, {
    id: 78,
    question: "A division by zero is error.",
    options: ["Concurrency control failure", "System crush", "Transaction failure", "Read failure"],
    correctAnswer: 2,
    explanation: "Division by zero causes transaction failure in database systems."
}, {
    id: 79,
    question: "What value will be assigned to the numeric variable x when the statement x = 2 * 3 + 4 is executed?",
    options: ["92", "234", "20", "10"],
    correctAnswer: 3,
    explanation: "Following operator precedence rules, multiplication happens before addition: 2*3=6, then 6+4=10. This gives us the final result of 10."
}, {
    id: 80,
    question: "Correct syntax of CSS is,",
    options: ["body {color black}", "body{color: black;}", "{body}color:black", "{body:color=black{body}"],
    correctAnswer: 1,
    explanation: "Correct CSS syntax follows the pattern: selector{property:value;}. Option B is correct with the selector 'body', property 'color', and value 'black' with proper syntax. The original was missing the closing semicolon and/or brace."
}, {
    id: 81,
    question: "Which of the following is the most danger internal threat to a computer or computer network",
    options: ["ignorance", "Hackers", "Trojan horse", "Malware"],
    correctAnswer: 0,
    explanation: "Internal ignorance/mistakes often cause more damage than external threats."
}, {
    id: 82,
    question: "Polymorphism is used to customize the behavior of an instance of a type (an object) based on existing conditions.",
    options: ["inheritance", "polymorphism", "encapsulation", "paradigm"],
    correctAnswer: 1,
    explanation: "Polymorphism allows objects to behave differently based on conditions - it enables one interface to be used for a general class of actions with the specific action determined by the exact nature of the situation."
}, {
    id: 83,
    question: "What a minimum cardinality value of 1 indicates in a binary relationship?",
    options: ["No limit on participation", "At most one participation", "Total participation", "Partial participation"],
    correctAnswer: 2,
    explanation: "Minimum cardinality 1 means mandatory (total) participation."
}, {
    id: 84,
    question: "Which of the following is a procedure for acquiring the necessary locks for a transaction where all necessary locks are acquired before any other lock released?",
    options: ["Authorization rule", "Two phase lock", "Record controller", "Exclusive lock"],
    correctAnswer: 1,
    explanation: "Two-phase locking has growing (acquire) and shrinking (release) phases."
}, {
    id: 85,
    question: "Select the server that runs the BIND package.",
    options: ["named", "shttp", "dns", "http"],
    correctAnswer: 0,
    explanation: "BIND DNS server runs as the 'named' daemon."
}, {
    id: 86,
    question: "used as a default log-in shell to be altered by the user.",
    options: ["chmod", "chsh", "rmsh", "tchsh"],
    correctAnswer: 1,
    explanation: "chsh (change shell) command modifies a user's login shell."
}, {
    id: 87,
    question: "Which statement makes the transaction permanent store in the database?",
    options: ["Rollback", "View", "Flashback", "Commit"],
    correctAnswer: 3,
    explanation: "COMMIT makes transaction changes permanent in the database."
}, {
    id: 88,
    question: "You are IT project manager for your organization and you're working to ensure that quality is maintained throughout the project execution. What must every project have to ensure the work in the project sticks to a standard of quality?",
    options: ["A project manager experienced with the technology", "A budget with plenty of cash reserve", "Clearly defined requirements", "A commitment from management"],
    correctAnswer: 2,
    explanation: "Clear requirements are fundamental for maintaining quality standards."
}, {
    id: 89,
    question: "You need to replace a failed AC adapter for a client's laptop. When replacing the adapter, which of the following item/device is acceptable to obtain the same or better results?",
    options: ["An AC adapter with a higher wattage rating than the original", "An AC adapter with a higher voltage rating than the original", "A DC adapter with the same voltage rating as the original", "An AC adapter with a lower voltage and wattage rating than the original"],
    correctAnswer: 0,
    explanation: "Higher wattage adapter can safely replace lower wattage one if voltage matches."
}, {
    id: 90,
    question: "Which benefits come with employing static routing?",
    options: ["It can create resiliency in a network.", "It is extremely scalable without issues", "There is less administrative overhead.", "It is extremely secure."],
    correctAnswer: 2,
    explanation: "Static routing has minimal overhead but lacks scalability/adaptability."
}, {
    id: 91,
    question: `Among the listed statements (i - iv), select the purpose of Dalvik Virtual Machine (DVM) in Androids.

i. Optimizing Virtual Machines
ii. Memory Optimizing
iii. Battery Life Optimizing
iv. Device Performance`,
    options: ["i & iv", "ii, iii", "i, iii, iv", "i, ii, iii"],
    correctAnswer: 3,
    explanation: "DVM optimizes memory, battery, and performance for Android devices."
}, {
    id: 92,
    question: "What result you will recognize when compiling a java file?",
    options: ["After you write and save an application, you can compile the bytecode to machine code", "Create a new file with the same name as the original file but with a .class extension", "The exact error message that appears varies depending on the compiler you are using", "Syntax errors are compile-time errors"],
    correctAnswer: 3,
    explanation: "Java compilation catches syntax errors during compile-time."
}, {
    id: 93,
    question: "Which of the following is the most danger internal threat to a computer or computer network",
    options: ["ignorance", "Hackers", "Trojan horse", "Malware"],
    correctAnswer: 0,
    explanation: "Internal ignorance/mistakes often cause more damage than external threats."
}, {
    id: 94,
    question: "By encryption of a text matches with",
    options: ["Hashing it", "Expanding it", "Scrambling it", "Compressing it"],
    correctAnswer: 2,
    explanation: "Encryption scrambles data to make it unreadable without the key."
}, {
    id: 95,
    question: "Which of the following doesn't assign the value 'Hello' to a variable named 'greeting', given that the variable named 'Welcome' already contains 'Hello'?",
    options: ["greeting=welcome;", '"Hello"=greeting', 'var greeting = "Hello"', 'greeting="Hello"'],
    correctAnswer: 1,
    explanation: "This is invalid syntax - cannot assign to a string literal."
}, {
    id: 96,
    question: "A candidate key that is chosen by the database designer as the principal means to identify a particular entity from an entity set is called.",
    options: ["Foreign key", "Primary key", "Candidate key", "Super key"],
    correctAnswer: 1,
    explanation: "The primary key is the selected candidate key used to uniquely identify records."
}, {
    id: 97,
    question: "layer is used/responsible in the three-tier model where collision Learning Domains should be created.",
    options: ["Distribution layer", "Core layer", "Access layer", "Routing layer"],
    correctAnswer: 2,
    explanation: "Access layer handles collision domains in three-tier network design."
}, {
    id: 98,
    question: "By default Unix operating system is.",
    options: ["Multi-Tasking", "Single-Tasking", "Multi User", "Multi Processes"],
    correctAnswer: 2,
    explanation: "Unix was designed from the beginning as a multi-user system."
}, {
    id: 99,
    question: "Which of the following is not an outlined security practice for personal computer users?",
    options: ["Use antivirus software", "Use strong passwords", "Implement a regular backup procedure", "Update product security"],
    correctAnswer: 3,
    explanation: "While important, updating product security is typically an organizational responsibility."
}, {
    id: 100,
    question: "What must every project have to ensure the work in the project sticks to a standard of quality?",
    options: ["A project manager experienced with the technology", "A budget with plenty of cash reserve", "Clearly defined requirements", "A commitment from management"],
    correctAnswer: 2,
    explanation: "Clear requirements are fundamental for maintaining quality standards in projects."
}];