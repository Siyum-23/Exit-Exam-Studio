[{
    id: 1,
    question: "Which one of the following is not the correct mapping of the Dot Net Data Provider?",
    options: ["Data Provider for SQL Server -> System.Data.MySqlClient", "Data Provider for Oracle -> System.Data.OracleClient", "Data Provider for OLEDB -> System.Data.OleDb", "Data Provider for ODBC -> System.Data.Odbc"],
    correctAnswer: 0,
    explanation: "The correct mapping for SQL Server should be System.Data.SqlClient, not System.Data.MySqlClient. MySqlClient is used for MySQL databases, while SqlClient is the correct namespace for SQL Server connections in .NET."
}, {
    id: 2,
    question: "When we use the MySqlConnection object to retrieve, insert, update and delete data in database connectivity in ADO.NET?",
    options: ["When we want to connect to the Oracle database.", "When we want to connect to the Sql server database", "When we want to connect to Microsoft Access database", "When we want to connect to the MySql server database"],
    correctAnswer: 3,
    explanation: "The MySqlConnection object is specifically designed for connecting to MySQL databases."
}, {
    id: 3,
    question: "Which method is used, when you want to perform an Insert, Update or Delete operation and the return type is Object and we can cast it to any type the object?",
    options: ["ExecuteScalar()", "ExecuteReader()", "ExecuteNonQuery()", "ExecuteQuery()"],
    correctAnswer: 0,
    explanation: "ExecuteScalar() is used when you want to get a single value (first column of first row) from a database query, and this return value can be cast to any appropriate type. For Insert, Update, or Delete operations where you just want to know the number of affected rows, ExecuteNonQuery() is used, which returns an integer, not an object that can be cast to any type."
}, {
    id: 4,
    question: "Which one of the following use when a method wants to return more than one value?",
    options: ["Value parameter", "Reference parameter", "Out parameter", "Array parameter"],
    correctAnswer: 2,
    explanation: "Out parameters are specifically designed to allow methods to return multiple values by assigning values to parameters marked with the 'out' keyword."
}, {
    id: 5,
    question: `What is the output of the following C# program after expected (run)?

public class Calculator {
  public static void main(String[] args){
    int a = 10;
    Console.WriteLine(++a*++a);
  }
}`,
    options: ["121", "144", "132", "100"],
    correctAnswer: 2,
    explanation: "The expression ++a*++a first increments a to 11, then increments again to 12, and multiplies them: 11*12=132. This happens because in C#, the pre-increment operator (++a) increments the value before the expression is evaluated, and the expression is evaluated from left to right."
}, {
    id: 6,
    question: `What is the output of the following C# program after expected (run)?

public class Calculator{
  public static void main(String[] args){
    int a = 5;
    a =a+5;
    switch(a){
      case 5: Console.WriteLine("5"); break;
      case 10: Console.WriteLine("10"); break;
      default: Console.WriteLine("0");
    }
  }
}`,
    options: ["10", "510", "5100", "100"],
    correctAnswer: 0,
    explanation: 'The code sets a=10, then the switch statement matches case 10 and prints "10".'
}, {
    id: 7,
    question: `How many times 'Hello' is printed

public class Print {
  public static void main(String[] args){
    for(int i = 0; i<5; i=5 )
    {
      Console.WriteLine("Hello");
    }
  }
}`,
    options: ["5", "4", "2", "1"],
    correctAnswer: 3,
    explanation: `The loop runs once (i=0), prints "Hello", then sets i=5, making the condition i<5 false, so it doesn't loop again.`
}, {
    id: 8,
    question: "Which pillars of OOP is nothing but hiding the internal detail of the methods?",
    options: ["Encapsulation", "Abstraction", "Inheritance", "Polymorphism"],
    correctAnswer: 1,
    explanation: "Abstraction focuses on hiding the internal implementation details and showing only the necessary features. It allows us to focus on what an object does rather than how it does it, providing a simplified view of an object by exposing only relevant attributes and behaviors."
}, {
    id: 9,
    question: "Which type of inheritance does not supported by Java?",
    options: ["Single inheritance", "Multiple inheritances", "Hierarchical inheritance", "Hybrid Inheritance"],
    correctAnswer: 1,
    explanation: "Java doesn't support multiple inheritance with classes (a class inheriting from multiple classes) to avoid the diamond problem, though it can be achieved with interfaces."
}, {
    id: 10,
    question: "Which pillars of OOP is nothing but one task performs in different way?",
    options: ["Polymorphism", "Inheritance", "Abstraction", "Encapsulation"],
    correctAnswer: 0,
    explanation: "Polymorphism allows objects to take on many forms, enabling the same operation to behave differently on different classes."
}, {
    id: 11,
    question: "When we have Student table which have firstName, surName, gender, studId and cgpa attributes on Haramaya database. And also, the table has 10 rows data that stored on Student tables. Since, we need to fetch data from our database Student table so, which one of the following java.sql class used to store the data that fetched from our database table?",
    options: ["Statement", "StatemetSets", "Result", "ResultSet"],
    correctAnswer: 3,
    explanation: "ResultSet is the JDBC interface used to store and navigate through the results of a database query."
}, {
    id: 12,
    question: "JDBC drivers are an interface that enables you to open database connections and to interact with it by sending SQL or database commands then receiving results with Java. Therefore which JDBC driver is 100% pure Java driver that is also called a thin drive and it requests directly to the database using its native protocol. It can be used directly on platform with a JVM and the most efficient since requests only go through one layer. Therefore it is a simplest driver to deploy since no additional libraries or middle-ware required?",
    options: ["Type IV driver", "Type I driver", "Type III driver", "Type II driver"],
    correctAnswer: 0,
    explanation: "Type IV drivers are pure Java drivers that communicate directly with the database using its native protocol, making them the most efficient."
}, {
    id: 13,
    question: "If you want to use your JDBC driver you must first register it with the DriverManager object, which has a driver−registration method. However, we have some techniques are available for registering JDBC drivers. The forName() method of Class is one technique used to register the driver class. This method is used to dynamically load the driver class. Therefore, according to driver loading aspects, which one of the following is not correct about driver loading to connecting the respective data source?",
    options: ['The Class.forName("sun.jdbc.odbc.JdbcOdbcDriver") driver loading is used to connecting to Microsoft Access database', 'The Class.forName("com.cloudscape.core.JDBCDriver") driver loading is used to connecting to Cloudscape database', 'The Class.forName("com.mysql.jdbc.Driver") driver loading is used to connecting to SQL server database', 'The Class.forName("oracle.jdbc.driver.OracleDriver") driver loading is used to connecting to oracle database'],
    correctAnswer: 2,
    explanation: "com.mysql.jdbc.Driver is for MySQL databases, not SQL Server. SQL Server would use com.microsoft.sqlserver.jdbc.SQLServerDriver."
}, {
    id: 14,
    question: "The Java Database Connectivity (JDBC) API provides universal data access from the Java programming language. Since, when we need to access virtually any data source, from relational databases to create parameterized statements such that data for parameters can be dynamically substituted and Only the no parameters versions of executeUpdate() and executeQuery() are allowed. So, which of the following class/interface is used to Precompiling SQL statements to avoid repeated compiling of the same SQL statement?",
    options: ["ResultSet", "DriverManager", "Statement", "PrepareStatement"],
    correctAnswer: 3,
    explanation: "PreparedStatement (not PrepareStatement) is used for precompiling SQL statements, which improves performance when the same statement is executed multiple times with different parameters. It also helps prevent SQL injection by properly handling parameter values."
}, {
    id: 15,
    question: "Which one of the following is primitive data type?",
    options: ["Integer", "Array", "Class", "List", "None"],
    correctAnswer: 4,
    explanation: "None of the options listed are primitive data types in Java. Integer is a wrapper class, not 'int' which would be primitive. The primitive data types in Java are: byte, short, int, long, float, double, char, and boolean. Arrays, Classes, and Lists are all reference types."
}, {
    id: 16,
    question: "Which one of the following correct sequences of execute and interpreted in java?",
    options: ["Class loaded -> Default constructor -> static variables -> non static variables and methods", "Main method -> Class loaded -> Parameterized constructor", "Class loaded -> static variables and methods -> constructor -> non static variables and methods", "Class loaded -> Instance Variables -> constructor -> non static variables and methods", "A and C", "C and D"],
    correctAnswer: 2,
    explanation: "The correct sequence is: Class loaded -> static variables/methods initialized -> constructor called -> non-static variables/methods initialized."
}, {
    id: 17,
    question: "Which of the following compiler generates the stub and skeleton object from the remote Interface?",
    options: ["javac", "javarmic", "rmi", "rmic", "None"],
    correctAnswer: 3,
    explanation: "The rmic (RMI compiler) generates stub and skeleton classes from remote interfaces for Java RMI applications."
}, {
    id: 18,
    question: "Which one of the following is Not True about the functionality of Skeleton objects in Remote method Invocation System?",
    options: ["Is an object act as getaway for the client side", "It read the parameter for the remote method and Unmarshals it", "It communicate directly with the stub objects", "All the incoming requests are routed through it.", "A and C", "A and D"],
    correctAnswer: 0,
    explanation: "Skeleton objects are on the server side, not the client side. The stub acts as the client-side gateway."
}, {
    id: 19,
    question: "In desktop application, which of the following is/are the basis to contain other user interface components like Label, Button, text Fields etc. in java Graphical User Interface (GUI) that is not contained another window.",
    options: ["Panel", "Frame", "java.awt", "javax.wing", "all"],
    correctAnswer: 0,
    explanation: "Panel is a container that can hold other components but isn't a top-level window itself. Frames are top-level windows, java.awt is a package, not a container, and the correct spelling would be javax.swing, not 'javax.wing'. A Panel is specifically designed to group components within another container."
}, {
    id: 20,
    question: 'When we need to display "Hello GUI" text on the content of our Graphical User Interface, so which one of the following is correct?',
    options: ['new Jframe("Hello GUI")', 'JFrame frame = new JFrame("Hello GUI")', 'frame.setText("Hello GUI")', "A and B", "All"],
    correctAnswer: 3,
    explanation: 'Both A and B will display "Hello GUI" in the title bar of the JFrame. To display text in the content area, you would need to add a JLabel or other component.'
}, {
    id: 21,
    question: "Which of the following is server side gateway which writes and transmits the response to the client matchine?",
    options: ["remote Object", "stub", "skeleton", "rmic", "All"],
    correctAnswer: 2,
    explanation: "In RMI, the skeleton is the server-side component that receives requests from the stub, calls the actual remote method, and sends the response back."
}, {
    id: 22,
    question: "Which operating system is advantageous for corporate customers since it allows synchronization with Microsoft Exchange, Novell GroupWise email, Lotus Domino, and other business software?",
    options: ["BlackBerry OS", "Symbian OS", "Harmony OS", "Bada OS"],
    correctAnswer: 0,
    explanation: "BlackBerry OS was particularly known for its strong enterprise features and integration with business email systems."
}, {
    id: 23,
    question: "An automated build system, with which we can define a build configuration that applies to all modules in our application?",
    options: ["OpenGl", "Android Runtime", "Gradle", "Manifests"],
    correctAnswer: 2,
    explanation: "Gradle is the build system used by Android that allows defining build configurations for entire applications."
}, {
    id: 24,
    question: "Which of the following does not involve developing a mobile app strategy to determine how your organization might benefit from one during the mobile app development process?",
    options: ["Determine the target audience for your app.", "Examine the competition.", "Establish the app's aims and objectives.", "Identifying the talents required for your app development initiative."],
    correctAnswer: 3,
    explanation: "While talent identification is important, it's more of an implementation detail than part of the strategic planning phase."
}, {
    id: 25,
    question: "Android application has go through a different stages in their life cycle. In which state activity start interacting with the user that means user can see the functionality and designing part of an application on the single screen.",
    options: ["onCreate()", "onResume()", "onStart()", "onPause()"],
    correctAnswer: 1,
    explanation: "onResume() is called when the activity is in the foreground and ready to interact with the user."
}, {
    id: 26,
    question: "Which of the following Android components has the primary goal of ensuring that the application remains active in the background so that the user can run many applications at the same time?",
    options: ["Service", "Content providers", "Broadcast receiver", "Implicit Intent"],
    correctAnswer: 0,
    explanation: "Services are designed to perform long-running operations in the background without a user interface."
}, {
    id: 27,
    question: "Android provides several ways to store and share data. Which of the following can be a way of storing and retrieving key-value pairs of data that can be used to store user settings or application configuration data?",
    options: ["SQLlite", "Preferences", "Internal Storage", "External Storage"],
    correctAnswer: 1,
    explanation: "SharedPreferences is Android's mechanism for storing key-value pairs persistently. The option 'Preferences' refers to this functionality, which is specifically designed for storing simple application settings and configuration data. SQLite is for structured relational data, while Internal and External Storage are for storing files."
}, {
    id: 28,
    question: "The Android framework provides a number of listeners, each of which has a set of callback methods. Which of the following manages an event in which the user maintains the touch over a view for an extended period of time?",
    options: ["onTouch()", "onFocusChange()", "onLongClick()", "onClick()"],
    correctAnswer: 2,
    explanation: "onLongClick() is triggered when the user presses and holds a view for an extended period (long press)."
}, {
    id: 29,
    question: "Which one of the following methods used for selecting project in certain organization?",
    options: ["Considering the broad need of the organization", "By categorizing the project based opportunity, directive and problem.", "Weighing score method", "All."],
    correctAnswer: 3,
    explanation: "All these methods are valid approaches for project selection in organizations."
}, {
    id: 30,
    question: "Which one of the following is the advantage of following formal project management system in project management?",
    options: ["Bad control of financial, physical, and human resources", "Improved customer relations", "Longer development times", "Higher costs"],
    correctAnswer: 1,
    explanation: "Formal project management typically leads to improved customer relations through better communication and delivery."
}, {
    id: 31,
    question: "Which one of the following is true?",
    options: ["scope, time, cost, and quality are facilitating knowledge area", "scope, time, cost, and quality are the key knowledge area", "project integration management is facilitating knowledge area", "All."],
    correctAnswer: 1,
    explanation: "Scope, time, cost, and quality are considered the core knowledge areas in project management."
}, {
    id: 32,
    question: "Configuration management in the project management that includes _________",
    options: ["Products and their descriptions", "Control changes, record and report changes and audit the products to verify conformance to requirements", "Record and report changes, and audit the products to verify conformance to requirements.", "All"],
    correctAnswer: 3,
    explanation: "Configuration management encompasses all these activities to maintain product integrity."
}, {
    id: 33,
    question: "Which one is false about the function of Earned Value Analysis",
    options: ["Measure a project's progress", "Forecast its completion date and final cost", "Provide schedule and budget variances along the way", "Having actual project information periodically is not mandatory to use EVM"],
    correctAnswer: 3,
    explanation: "EVM requires periodic actual project information to be effective."
}, {
    id: 34,
    question: "In project management project team should aware of modern quality management complements in project management. Which one can be characteristics of modern quality management?",
    options: ["Requires customer satisfaction", "Prefers to inspection to prevention", "Unaware of management responsibility for quality", "None."],
    correctAnswer: 0,
    explanation: "Customer satisfaction is a key focus of modern quality management."
}, {
    id: 35,
    question: "Among described below which one of the following quality management process related with evaluating overall project performance to ensure the project will satisfy the relevant quality standards?",
    options: ["Quality planning", "Quality assurance", "Quality control", "All."],
    correctAnswer: 1,
    explanation: "Quality assurance focuses on evaluating overall performance against quality standards."
}, {
    id: 36,
    question: "Which of the following is a hierarchical database that stores information about objects on a network and makes this information available to users and administrators?",
    options: ["Windows Registry", "Windows Active Directory", "Domain Name System (DNS)", "Lightweight Directory Access Protocol (LDAP)"],
    correctAnswer: 3,
    explanation: "LDAP is a protocol for accessing and maintaining distributed directory information services over an IP network. It provides a hierarchical database structure for storing information about network objects (like users, computers, printers) and allows for querying, adding, modifying, and deleting entries through a standardized interface."
}, {
    id: 37,
    question: "You are setting up a new network for a small business and need to configure routing between different subnets. You want to ensure that traffic flows smoothly and securely between the subnets. Which of the following protocols is commonly used for this purpose?",
    options: ["Border Gateway Protocol (BGP)", "Transmission Control Protocol (TCP)", "User Datagram Protocol (UDP)", "Internet Protocol (IP)"],
    correctAnswer: 0,
    explanation: "For a small business network with multiple subnets, BGP would not typically be used as it's designed for internet-scale routing between autonomous systems. Interior routing protocols like OSPF or RIP would be more appropriate for subnet routing within a small business. However, among the given options, BGP is the only routing protocol listed."
}, {
    id: 38,
    question: "Which of the following types of proxies or gateways is commonly used for filtering and controlling internet access in a network?",
    options: ["Virtual Private Network (VPN)", "Reverse Proxy", "Content Filter Proxy", "Load Balancer"],
    correctAnswer: 2,
    explanation: "Content Filter Proxies are specifically designed to filter and control internet access."
}, {
    id: 39,
    question: "If you are a system administrator for a small business that has multiple remote sites and you want to be able to remotely manage the servers at these sites and perform routine maintenance tasks, which of the following tools will you use?",
    options: ["Remote Desktop Connection", "Virtual Private Network (VPN)", "Telnet", "File Transfer Protocol (FTP)"],
    correctAnswer: 0,
    explanation: "Remote Desktop Connection provides graphical remote access for server management."
}, {
    id: 40,
    question: "You are responsible for managing a Linux mail server that is used by your organization. You want to configure the server to send and receive email securely. Which of the following protocols will you use to encrypt email transmissions?",
    options: ["SMTP", "POP3", "IMAP", "TLS"],
    correctAnswer: 3,
    explanation: "TLS (Transport Layer Security) is used to encrypt email transmissions between servers and clients."
}, {
    id: 41,
    question: "Which of the following is NOT a security best practice for Linux systems?",
    options: ["Regularly updating software and security patches", "Disabling unnecessary network services", "Running processes with root privileges", "Configuring a firewall"],
    correctAnswer: 2,
    explanation: "Running processes with root privileges unnecessarily is a security risk and not a best practice."
}, {
    id: 42,
    question: "Which of the following file systems is commonly used for managing storage on a Linux system?",
    options: ["FAT32", "NTFS", "Ext4", "HFS+"],
    correctAnswer: 2,
    explanation: "Ext4 is the most common native Linux filesystem."
}, {
    id: 43,
    question: "Which of the following is false about constraints?",
    options: ["The DEFAULT constraint defines the initial value in a column: the value that will appear if you don't insert anything.", "Constraints are used to enforce data integrity in a relational database.", "Each column in the table has a specific data type, so it's possible to insert text into a column with INT type or a decimal number into a column with BOOLEAN type data.", "None of the above"],
    correctAnswer: 2,
    explanation: "Option C is false: Each column in a database table has a specific data type, and it is NOT possible to insert text into a column with INT type or a decimal number into a column with BOOLEAN type data. Database systems enforce type checking to maintain data integrity, meaning you cannot insert data of an incompatible type without conversion or an error occurring."
}, {
    id: 44,
    question: "Which of the following is false?",
    options: ["Formally the relational algebra and relational calculus are equivalent to each other. For every expression in the algebra, there is an equivalent expression in the calculus", "In non-procedural query language user instructs the system to produce the desired result without telling the step-by-step process", "In procedural query language, user instructs the system to perform a series of operations to produce the desired results.", "In non-procedural language users tell what data to be retrieved from database and how to retrieve it."],
    correctAnswer: 3,
    explanation: "Non-procedural languages specify what data to retrieve, not how to retrieve it."
}, {
    id: 45,
    question: "To convert ER Diagram to Relational Tables in case of one-to-many cardinality.",
    options: ["Create a new table (which is the associative entity) and post primary key or candidate key from each entity as attributes in the new table along with some additional attributes", 'Post the primary key or candidate key from the "one" side as a foreign key attribute to the "many" side.', "All the attributes are merged into a single table. Which means one can post the primary key or candidate key of one of the relations to the other as a foreign key.", "None"],
    correctAnswer: 1,
    explanation: "For one-to-many relationships, the primary key of the 'one' side becomes a foreign key on the 'many' side."
}, {
    id: 46,
    question: "If a transaction transfers 100 birr from account A to account B, which is located at another site. What type of transaction is this?",
    options: ["Global transaction", "Parallel transaction", "Local transaction", "None"],
    correctAnswer: 0,
    explanation: "A global transaction involves multiple sites/databases."
}, {
    id: 47,
    question: "It is a loosely-coupled architecture optimized for applications that are inherently centralized and require high availability and performance",
    options: ["Shared nothing", "Parallel DBMS", "Shared disk", "Multi-database system"],
    correctAnswer: 2,
    explanation: "Shared disk architecture allows multiple processors to access the same disk storage."
}, {
    id: 48,
    question: "Where several tuples can have the same apparent key value but have different attribute values for users at different classification levels.",
    options: ["Filtering", "Poly-instantiation", "Fragmentation", "Concurrency control"],
    correctAnswer: 1,
    explanation: "Poly-instantiation allows multiple tuples with the same apparent key but different security levels."
}, {
    id: 49,
    question: "Which of the following is the correct ways for handling recovery?",
    options: ["Steal/No-Force (Redo/Undo)", "No-Steal/Force (Undo/No-redo)", "Force/Steal (No-undo/Redo)", "No-Steal/Force (No-undo/No-redo)"],
    correctAnswer: 0,
    explanation: "Steal/No-Force with Redo/Undo is the most common and flexible recovery approach."
}, {
    id: 50,
    question: "Which of the following true about relation fragmentation?",
    options: ["A vertical fragment is produced by specifying a predicate that performs a restriction on the tuples in the relation.", "A horizontal fragment is defined using the Projection operation of the relational algebra", "In vertical fragmentation all schemas must contain a common candidate key (or superkey) to ensure lossless join property", "Horizontal fragmentation is a subset of a relation which is created by a subset of columns."],
    correctAnswer: 2,
    explanation: "Option C is correct. In vertical fragmentation, which divides a relation by columns (attributes), all resulting schemas must contain a common candidate key to ensure the lossless join property. This allows the original relation to be reconstructed without loss of information. Options A and B are reversed - horizontal fragmentation uses restriction (WHERE clause) to split by rows, while vertical fragmentation uses projection to split by columns."
}, {
    id: 51,
    question: "Two operations in a schedule are said to be conflict.",
    options: ["If the operation belongs to different transaction", "If the operation accesses the same data item X", "If at least one of the operation is a write_Item(X)", "All"],
    correctAnswer: 3,
    explanation: "All these conditions must be true for operations to conflict."
}, {
    id: 52,
    question: "Which of the following is false about Mandatory Access Control(MAC)",
    options: ["MAC implements zero-trust principles with its control mechanisms.", "It considered the strictest of all levels of access control systems.", "Manual configuration of security levels and clearances requires constant attention from administrators.", "Users can configure data access parameters without administrators"],
    correctAnswer: 3,
    explanation: "In MAC, users cannot configure access parameters - this is strictly controlled by administrators."
}, {
    id: 53,
    question: "HTML tables allow web developers to arrange data into rows and columns. Then which one of the following is true about html table?",
    options: ["In tables, header cells are centred by default and the data cells are right-aligned.", "In the case of character formatting the tag <TW> is used for typewriter-like text", "Unordered list starts with <UL> and ends with </UL>", "<SUPR> tag is used for superscripts text"],
    correctAnswer: 2,
    explanation: "Unordered lists in HTML start with <UL> and end with </UL> (closing tag). The other options contain inaccuracies: header cells (<th>) are centered by default but data cells (<td>) are left-aligned by default. The typewriter-like text uses <tt>, not <TW>, and superscript text uses <sup>, not <SUPR>."
}, {
    id: 54,
    question: "Application programs and computing devices are having a communication with each other by exchanging a message using a communication standard called transmission control protocol. The followings are then true about transmission control protocol except",
    options: ["TCP organizes data so that it can be transmitted between a server and a client.", "It guarantees the integrity of the data being transmitted over the network", "Compared to user datagram protocol, transmission control protocol establishes a low latency between applications", "TCP can be an expensive network tool as it includes absent or corrupted packets"],
    correctAnswer: 2,
    explanation: "TCP has higher latency than UDP due to its connection-oriented nature and reliability features. TCP requires a three-way handshake to establish connections, acknowledges data packets, handles retransmission of lost packets, and maintains packet ordering - all of which add overhead and increase latency compared to UDP, which simply sends packets without these reliability mechanisms."
}, {
    id: 55,
    question: "In a web based technology, a security vulnerability allows an attacker to inject HTML code into web pages that are viewed by other users. In order to have Confidentiality, Integrity and Availability of information, the followings are the mechanisms to be considered except",
    options: ["HTML encryption to ensure web content cannot be accessed by unauthorized users", "The use of digital certificates to validate a domain and ensure the content is coming form a trusted location", "Encryption of content as it travels from the server to the client and back again", "Using a cookies both at client and server to encrpt all further communication"],
    correctAnswer: 3,
    explanation: "Cookies are not typically used to encrypt communication - that's what TLS/SSL is for."
}, {
    id: 56,
    question: "In JavaScript, a primitive value or data type is data that is not an object and has no methods or properties. Which one of the following is true about primitive data type?",
    options: ["Variable used in the code doesn't exist", "Variable is not assigned to any value", "Property does not exist.", "All"],
    correctAnswer: 3,
    explanation: "All these statements can be true about primitive values in JavaScript."
}, {
    id: 57,
    question: "Which one of the following is wrong about session and cookies?",
    options: ["Session is a small file that the server is embedding on the user's computer", "It is recommended to check if cookie is set or not before trying to access its values", "Session_distroy() function is the function used to destroy a session without using any arguments", "None of the above"],
    correctAnswer: 0,
    explanation: "Option A is incorrect because it describes cookies, not sessions. Sessions are server-side storage mechanisms where data is kept on the server and referenced by a session ID (often stored in a cookie). Cookies are small files stored on the client's computer, while sessions store the actual data on the server for security and to avoid size limitations of cookies."
}, {
    id: 58,
    question: "Which one of the following fragment of HTML code is the correct method to display the formula of a²=a*b²+c²?",
    options: ["<p>a=a*b<sup>2</sup>+c<sup>2</sup></p>", "<p>a<sup>2</sup>=a*b<sup>2</sup>+c<sup>2</sup></p>", "<p>a<sub>2</sub>=a*b<sub>2</sub>+c<sub>2</sub></p>", "<p>a<sup>2</sup>=a*<sup>b2</sup>+<sup>c2</sup></p>"],
    correctAnswer: 1,
    explanation: "This correctly uses the <sup> tag for superscripts and proper HTML structure."
}, {
    id: 59,
    question: "The data sent by POST method goes through HTTP header so security depends on HTTP protocol. By using Secure HTTP you can make sure that your information is secure. What is $_POST?",
    options: ["An associative array", "A PHP variable", "A data structure containing all the form variables", "All of the above"],
    correctAnswer: 3,
    explanation: "$_POST in PHP is all of these - an associative array variable containing form data."
}, {
    id: 60,
    question: "The web server does not know who you are or what you do when you work with an application. But there is a way to store information to be used across multiple pages without storing on users computer. So, which of the following way holds information?",
    options: ["Session", "cookies", "Request", "Post", "All"],
    correctAnswer: 0,
    explanation: "Sessions store information server-side for use across multiple pages during a user's visit."
}, {
    id: 61,
    question: "A web browser will automatically send the cookies set by a server back to the server for all http requests to the server. Why?",
    options: ["Otherwise, the server could never see if it set a cookie on the browser", "Otherwise, the server would have to send a separate request when it needed to check a cookie value", "The browser initiates all contact with the server, the server cannot send a request to the browser", "All of the above are true"],
    correctAnswer: 2,
    explanation: "The HTTP protocol is request-response, with the browser always initiating contact."
}, {
    id: 62,
    question: "Which of the following is not a PHP function used to interface with MySQL?",
    options: ["mysql_post", "mysql_select_db", "mysql_connect", "mysql_query", "mysql_fatch_data"],
    correctAnswer: 0,
    explanation: "mysql_post is not a valid PHP MySQL function. The correct options for PHP MySQL functions are mysql_select_db (selects a database), mysql_connect (establishes a connection), mysql_query (executes a query), while mysql_fatch_data is misspelled - the correct function is mysql_fetch_array or mysql_fetch_assoc for retrieving data."
}, {
    id: 63,
    question: "What is an interpreted language which is used to manage the dynamic content of the website?",
    options: ["Server Scripting language", "Java Scripting Language", "Hypertext Preprocessor", "A and c", "A and B", "All"],
    correctAnswer: 3,
    explanation: "PHP (Hypertext Preprocessor) is a server-side scripting language for dynamic content."
}, {
    id: 64,
    question: "Which of the following is a symbol in PHP scripting Language, which used to perform operations on variables or values?",
    options: ["function", "variable", "Operation", "operators", "All", "None"],
    correctAnswer: 3,
    explanation: "In PHP, operators are symbols used to perform operations on variables or values. Examples include arithmetic operators (+, -, *, /), comparison operators (==, !=), and logical operators (&&, ||)."
}, {
    id: 65,
    question: "Which of the following method used to open a file using PHP scripting language?",
    options: ["openfile()", "fileOpen()", "openf()", "fopen()", "All", "None"],
    correctAnswer: 3,
    explanation: "The fopen() function is used in PHP to open a file. It takes two parameters: the name of the file and the mode in which to open the file (e.g., 'r' for read, 'w' for write)."
}, {
    id: 66,
    question: "A security manager needs to be able to regularity determine when operating system files change what kind of tool is needed for this risk?",
    options: ["Event logging", "Intrusion detection tool", "File system integrity monitoring tool", "Log analysis tool"],
    correctAnswer: 2,
    explanation: "A file system integrity monitoring tool is specifically designed to detect changes in system files, which is crucial for identifying unauthorized modifications that could indicate a security breach."
}, {
    id: 67,
    question: "If Transport Layer Security is used to secure data (e.g. web pages) between a client and server, TLS uses:",
    options: ["Public key algorithms for data confidentiality and MD5 or SHA1 for data integrity.", "Symmetric key algorithms for key exchange and message authentication codes for authentication", "Message authentication codes for data integrity and symmetric key algorithms for data confidentiality.", "Public key algorithms for key exchange and Diffie-Hellman for data integrity."],
    correctAnswer: 2,
    explanation: "TLS uses symmetric key algorithms (like AES) for bulk data encryption (confidentiality) and message authentication codes (MACs like HMAC-SHA256) for data integrity. Public key cryptography is used for the initial key exchange and authentication, not for bulk data encryption which would be inefficient. Symmetric encryption is much faster for encrypting the actual data transfer."
}, {
    id: 68,
    question: "Using symmetric key encryption to successfully provide authentication relies upon:",
    options: ["The sender encrypting with a private key", "The sender encrypting with a public key", "The sender sending an encrypted copy of the shared secret key", "The recipient being able to identify messages encrypted with the wrong key"],
    correctAnswer: 3,
    explanation: "In symmetric key authentication, the recipient can verify the sender's identity by confirming the message was encrypted with the correct shared key. If the wrong key was used, the decryption would fail."
}, {
    id: 69,
    question: "What is the best statement for taking advantage of a weakness in the security of an IT system?",
    options: ["Threat", "Attack", "Exploit", "Vulnerability"],
    correctAnswer: 2,
    explanation: "An exploit is the actual mechanism or technique used to take advantage of a vulnerability in a system. A vulnerability is the weakness itself, a threat is the potential danger posed by an attacker, and an attack is the actual attempt to compromise security, while an exploit specifically refers to the method used to leverage a vulnerability."
}, {
    id: 70,
    question: "If your friend want to hack contacts of your phone or E-mails and attempts to acquire your password is classified as:",
    options: ["Spamming", "Bugging", "Spoofing", "Phishing"],
    correctAnswer: 3,
    explanation: "Phishing is the fraudulent attempt to obtain sensitive information by disguising as a trustworthy entity, typically through electronic communication."
}, {
    id: 71,
    question: "A security manager is setting up resource permission in application. The security manager has discovered that he can establish object that contains accesses control model that most closely resembles is:",
    options: ["Access matrix", "Mandatory access control (MAC)", "Discretionary access control (DAC)", "Role based access control (RBAC)"],
    correctAnswer: 3,
    explanation: "RBAC assigns permissions to roles rather than individuals, making it scalable and manageable for applications with many users and complex permission structures."
}, {
    id: 72,
    question: "A security officer has declared that information system must be certified before it can be used. This is belongs for:",
    options: ["The system must be evaluated according to established evaluation criteria", "A formal management decision is required before the system can be used", "Penetration tests must be performed against the system", "A code review must be performed against the system"],
    correctAnswer: 0,
    explanation: "Certification involves evaluating the system against predefined security standards or criteria to ensure it meets required security levels before being put into operation."
}, {
    id: 73,
    question: "Which memory is known by the name cache memory?",
    options: ["Dynamic random access memory (DRAM)", "Static random Access memory (SRAM)", "Programmable read only memory (PROM)", "Electric erasable read only memory (EEROM)"],
    correctAnswer: 1,
    explanation: "Cache memory typically uses SRAM (Static RAM) because it's faster than DRAM, though more expensive. SRAM doesn't need to be refreshed like DRAM, making it suitable for cache."
}, {
    id: 74,
    question: "An instrument that allows a laptop computer to be more like a desktop system.",
    options: ["Printer", "Docking station", "Ultra power saver", "Router"],
    correctAnswer: 1,
    explanation: "A docking station provides additional ports and connections, allowing a laptop to easily connect to multiple peripherals like monitors, keyboards, and network cables similar to a desktop setup."
}, {
    id: 75,
    question: "One of the following is incorrect about performing computer components cleaning (preventive maintenance).",
    options: ["Using denatured alcohol for cleaning rubber rollers, such as those found inside printers", "Using Urethane swabs to clean between the keys on a keyboard.", "Spraying or pour liquid on computer components.", "Power off and unplug the computer power before performing preventive maintenance."],
    correctAnswer: 2,
    explanation: "Spraying or pouring liquid directly on computer components is dangerous and can cause short circuits. Cleaning should be done with appropriate tools like compressed air or lightly dampened (not wet) cloths."
}, {
    id: 76,
    question: "_____is a method of using hard disk space as if it were RAM.",
    options: ["Random access memory", "Virtual memory", "Cache memory", "Read only memory"],
    correctAnswer: 1,
    explanation: "Virtual memory uses disk space to extend the available memory by swapping pages of memory between RAM and disk storage when RAM is full."
}, {
    id: 77,
    question: "Which one of the following is not the function of power supply?",
    options: ["Converting AC to DC", "Distributes lower voltage DC power to components throughout the computer", "Provides cooling through the use of a fan located inside the power supply.", "Preventing electrostatic discharging by absorbing the static electricity"],
    correctAnswer: 3,
    explanation: "While power supplies do convert AC to DC, distribute power, and often include cooling fans, they don't prevent electrostatic discharge (ESD). ESD prevention is handled by other components and proper grounding techniques."
}, {
    id: 78,
    question: "How could SCSI termination be performed?",
    options: ["By installing a jumper", "By installing a terminator plug", "By using software", "All are the answers"],
    correctAnswer: 3,
    explanation: "SCSI termination can be done through physical terminators (plugs or resistors), jumper settings on devices, or in some cases through software configuration, depending on the SCSI implementation."
}, {
    id: 79,
    question: "A place every software and hardware configuration is stored in a database, such things stored as folder and file property settings, port configuration, application preferences, and user profiles is:",
    options: ["Windows registry", "Windows help center", "My document", "Windows recovery folder"],
    correctAnswer: 0,
    explanation: "The Windows Registry is a hierarchical database that stores low-level settings for the operating system and for applications that opt to use the registry."
}, {
    id: 80,
    question: "Which one of the following is a bad habit when performing computer hardware maintenance?",
    options: ["Using Antistatic devices (antistatic mat and antistatic wrist strap).", "Using magnetized screw drivers while disassembling a HDD.", "Keeping paper and pen nearby for note taking and diagramming.", "When removing adapters, do not stack the adapters on top of one another"],
    correctAnswer: 1,
    explanation: "Magnetized tools can damage sensitive components, especially hard drives which store data magnetically. Always use non-magnetic tools for computer maintenance."
}, {
    id: 81,
    question: "A _____ is a software program that intercepts the printer's request to print, instead of going directly to the printer, it sends data to the hard drive, and then it controls the data from the hard drive going to the printer.",
    options: ["A primary corona", "A fuser cleaning pad", "A Print spooler", "A print writer"],
    correctAnswer: 2,
    explanation: "A print spooler manages the print queue by temporarily storing print jobs on disk and sending them to the printer at a rate the printer can handle, allowing the computer to continue working without waiting for printing to complete."
}, {
    id: 82,
    question: "If a computer beeps once then three times, then four times, then three more times during POST and the computer has a Phoenix BIOS, what is a possible suspect component?",
    options: ["Keyboard", "BIOS", "Memory (RAM)", "Video"],
    correctAnswer: 2,
    explanation: "Phoenix BIOS beep codes follow specific patterns. The 1-3-4-3 beep code typically indicates a memory (RAM) failure during the POST (Power-On Self-Test) process."
}, {
    id: 83,
    question: "In the following pairs of OSI protocol layer/ sub-layer and its functionality the INCORRECT pair is:-",
    options: ["Network layer and Routing", "Data Link Layer and Bit synchronization", "Transport layer and End-to-end process communication", "Medium Access Control sub-layer and Channel sharing"],
    correctAnswer: 1,
    explanation: "The incorrect pairing is 'Data Link Layer and Bit synchronization' because bit synchronization is a function of the Physical Layer (Layer 1), not the Data Link Layer (Layer 2). The Data Link Layer handles framing, error detection, and MAC addressing, while the Physical Layer is responsible for bit-level transmission, including synchronization, encoding, and the physical medium itself."
}, {
    id: 84,
    question: e.jsxs("div", {
        children: ["Consider below figure: Then the network address, 180.70.65.130 goes through which of the following interface?", e.jsx("img", {
            src: "images/questions/networkIT2015id84.png",
            alt: "network",
            style: {
                maxWidth: "350px"
            },
            onError: n => {
                const t = n.currentTarget;
                t.src = "/questions/networkIT2015id84_backup.png",
                console.error("Image failed to load, fallback image loaded.")
            }
            ,
            onLoad: n => {
                const t = n.currentTarget;
                t.style.display = "block"
            }
        })]
    }),
    options: ["m0", "m1", "m2", "m3"],
    correctAnswer: 0,
    explanation: "Based on the routing table shown in the figure (though not visible here), the network address 180.70.65.130 would be routed through interface m0 according to the longest prefix matching rule in routing decisions."
}, {
    id: 85,
    question: "The transport layer protocols used for real time multimedia, file transfer, DNS and email respectively are",
    options: ["TCP, UDP, UDP and TCP", "UDP, TCP, TCP and UDP", "UDP, TCP, UDP and TCP", "TCP, UDP, TCP and UDP"],
    correctAnswer: 2,
    explanation: "Real-time multimedia uses UDP for its lower overhead and tolerance for packet loss. File transfer uses TCP for reliability. DNS primarily uses UDP but can use TCP for large responses. Email (SMTP) uses TCP for reliable delivery."
}, {
    id: 86,
    question: "In one of the pairs of protocols given below, both the protocols can use multiple TCP connections between the same client and the server. Which one is that?",
    options: ["HTTP, TELNET", "FTP, SMTP", "HTTP, FTP", "HTTP, SMTP"],
    correctAnswer: 2,
    explanation: "Both HTTP (especially HTTP/1.1 with pipelining) and FTP can establish multiple TCP connections between client and server. FTP uses separate control and data connections, while HTTP can open multiple connections for parallel downloads."
}, {
    id: 87,
    question: "Given an IP address and subnet mask of 192.168.20.39 and 255.255.255.240 then what is the broadcast address of this given IP?",
    options: ["192.168.20.63", "192.168.20.47", "192.168.20.41", "192.168.20.64"],
    correctAnswer: 1,
    explanation: "With subnet mask 255.255.255.240 (/28), we have 4 host bits (2^4 = 16 addresses per subnet). To find the network address, we AND the IP address with the subnet mask: 192.168.20.39 & 255.255.255.240 = 192.168.20.32. With 16 addresses, the range is 192.168.20.32 to 192.168.20.47, making the broadcast address 192.168.20.47 (one less than the next subnet's network address of 192.168.20.48)."
}, {
    id: 88,
    question: "A service provider has given you the class C network range 209.50.1.0. Your company must break the network into as many subnets as possible as long as there are at least 7 clients per network. Which one of the following statement is true about this subnetting scenario?",
    options: ["The network address of the second subnet is 209.50.1.8", "The broadcast address of the first subnet is 209.50.1.7", "The network address of the third subnet is 209.50.1.47", "The broadcast address of the second subnet is 209.50.1.31"],
    correctAnswer: 3,
    explanation: `For 7 hosts per subnet, we need at least 3 host bits (2^3-2=6 is insufficient) so we use 4 host bits (16 addresses per subnet, with 14 usable host addresses). With a Class C network and 4 host bits, we have 4 subnet bits, creating 16 subnets. The subnet ranges would be:
1st subnet: 209.50.1.0-15 (Network: 209.50.1.0, Broadcast: 209.50.1.15)
2nd subnet: 209.50.1.16-31 (Network: 209.50.1.16, Broadcast: 209.50.1.31)
3rd subnet: 209.50.1.32-47 (Network: 209.50.1.32, Broadcast: 209.50.1.47)
Therefore, the broadcast address of the second subnet is 209.50.1.31.`
}, {
    id: 89,
    question: "Suppose computers A and B have IP addresses 10.105.1.113 and 10.105.1.91 respectively and they both use the same net mask N. Which of the values of N given below should not be used if A and B should belong to the same network?",
    options: ["255.255.255.0", "255.255.255.128", "255.255.255.192", "255.255.255.224"],
    correctAnswer: 3,
    explanation: `With mask 255.255.255.224 (/27), each subnet has 32 addresses (2^5), with networks starting at multiples of 32. The IP 10.105.1.113 falls in the range 10.105.1.96-127 (network address 10.105.1.96), while 10.105.1.91 falls in the range 10.105.1.64-95 (network address 10.105.1.64). This puts them in different subnets. With the other masks, they would be in the same subnet: 
- 255.255.255.0 (/24): Both in 10.105.1.0/24
- 255.255.255.128 (/25): Both in 10.105.1.0/25
- 255.255.255.192 (/26): Both in 10.105.1.64/26`
}, {
    id: 90,
    question: "Which OSI layer is responsible for encryption, compression and translation of packets sent from source to destination?",
    options: ["Session layer", "Presentation layer", "Transport layer", "Datalink layer"],
    correctAnswer: 1,
    explanation: "The Presentation Layer (Layer 6) handles data representation issues including encryption/decryption, compression/decompression, and character/format translation between different systems."
}, {
    id: 91,
    question: "When a packet travels from router to router to its destination, what address continually changes from hop to hop?",
    options: ["Source and destination Layer 2 address", "Source Layer 3 address", "Destination Layer 3 address", "Destination port"],
    correctAnswer: 0,
    explanation: "Layer 2 (MAC) addresses change at each hop as the packet moves between routers, while Layer 3 (IP) addresses remain constant (unless NAT is involved). The source/destination IP and port numbers typically stay the same throughout the journey."
}, {
    id: 92,
    question: "Which statement best describes convergence on a network?",
    options: ["The amount of time required for routers to share administrative configuration changes, such as password changes, from one end of a network to the other end", "The time required for the routers in the network to update their routing tables after a topology change has occurred", "The time required for the routers in one autonomous system to learn routes to destinations in another autonomous system", "The time required for routers running disparate routing protocols to update their routing tables"],
    correctAnswer: 1,
    explanation: "Convergence refers to the process and time it takes for all routers in a network to update their routing tables and reach a consistent state after a network topology change, ensuring packets are routed correctly."
}, {
    id: 93,
    question: `Consider the following three statements about link state and distance vector routing protocols, for a large network with 500 network nodes and 4000 links.

[S1] The computational overhead in link state protocols is higher than in distance vector protocols.
[S2] A distance vector protocol (with split horizon) avoids persistent routing loops, but not a link state protocol.
[S3] After a topology change, a link state protocol will converge faster than a distance vector protocol.

Which one of the following is correct about S1, S2 and S3?`,
    options: ["S1, S2 and S3 are all true", "S1, S2 and S3 are all false", "S1 and S2 are true, but S3 is false", "S1 and S3 are true, but S2 is false."],
    correctAnswer: 3,
    explanation: "S1 is true - link state protocols require more computation (Dijkstra's algorithm). S2 is false - both can avoid loops when properly configured. S3 is true - link state protocols typically converge faster after topology changes."
}, {
    id: 94,
    question: `Consider the following statements about the routing protocols. Routing Information Protocol (RIP) and Open Shortest Path First (OSPF) in an IPv4 network.

I: RIP uses distance vector routing
II: RIP packets are sent using UDP
III: OSPF packets are sent using TCP
IV: OSPF operation is based on link-state routing

Which of the statements above are CORRECT?`,
    options: ["I and IV only", "I, II and III only", "I, II and IV only", "II, III and IV only"],
    correctAnswer: 2,
    explanation: "I is correct (RIP is distance vector), II is correct (RIP uses UDP port 520), III is incorrect (OSPF uses IP protocol 89 directly, not TCP), IV is correct (OSPF is link-state)."
}, {
    id: 95,
    question: e.jsxs("div", {
        children: ["In the given network diagram below what is the best route from node A to node J using Dijkstra algorithm? Assume the source is at vertex A.", e.jsx("img", {
            src: "images/questions/networkIT2015id95.png",
            alt: "network",
            style: {
                maxWidth: "350px"
            },
            onError: n => {
                const t = n.currentTarget;
                t.src = "/questions/networkIT2015id95_backup.png",
                console.error("Image failed to load, fallback image loaded.")
            }
            ,
            onLoad: n => {
                const t = n.currentTarget;
                t.style.display = "block"
            }
        })]
    }),
    options: ["ABEGHJ", "ADGJ", "ACFGJ", "ACDFGIJ"],
    correctAnswer: 3,
    explanation: "Using Dijkstra's algorithm, which finds the shortest path between nodes in a graph based on cumulative edge weights, the path ACDFGIJ would be selected. Dijkstra's algorithm works by maintaining a set of unvisited nodes and a set of tentative distances, always selecting the unvisited node with the smallest tentative distance, updating neighbors, and marking it as visited until the destination is reached or all possible paths are explored."
}, {
    id: 96,
    question: `With the following equipment list which of the following network scenario could be supported?

Two IP subnets of 255.255.255.0
Seven 48 port switches
Two router interfaces`,
    options: ["600 workstations, with 300 workstations in two broadcast domains and each workstation in its own collision domain", "300 workstations, with 150 workstations in two broadcast domains and each workstation in its own collision domain", "300 workstations, with 150 workstations in two broadcast domains and all workstations in the same collision domain", "300 workstations, in a single broadcast domains and each workstation in its own collision domain"],
    correctAnswer: 1,
    explanation: "With two router interfaces and two subnets, you can create two broadcast domains (VLANs). Seven 48-port switches provide enough ports for 300 workstations (42 ports per subnet). Switches create separate collision domains per port."
}, {
    id: 97,
    question: "Which command will allow host 192.168.144.25 to have telnet access to network 172.16.0.0?",
    options: ["Access-list 15 permit TCP 192.168.144.25 0.0.0.0 172.16.0.0 0.0.255.255 eq 23", "Access-list 150 permit UDP 192.168.144.25 0.0.0.0 172.16.0.0 0.0.255.255 eq 23", "Access-list 150 permit TCP 192.168.144.25 0.0.0.0 172.16.0.0 0.0.255.255 eq 21", "Access-list 150 permit TCP 192.168.144.25 0.0.0.0 172.16.0.0 0.0.255.255 eq 23"],
    correctAnswer: 3,
    explanation: "The correct command uses an Extended ACL (in the range 100-199, so 150 is valid) with TCP protocol (as Telnet uses TCP), specifies the source host 192.168.144.25, uses a wildcard mask of 0.0.0.0 (exact host match), targets the destination network 172.16.0.0 with wildcard 0.0.255.255 (for the entire 172.16.0.0/16 network), and specifies port 23 which is the standard Telnet port."
}, {
    id: 98,
    question: "Which one of the following is TRUE about the interior gateway routing protocols-Routing information protocol (RIP) and Open Shortest Path First (OSPF)?",
    options: ["RIP uses distance vector routing and OSPF uses link state routing", "OSPF uses distance vector routing and RIP uses link state routing", "Both RIP and OSPF use link state routing", "Both RIP and OSPF use distance vector routing"],
    correctAnswer: 0,
    explanation: "RIP is a classic distance vector protocol that shares its entire routing table with neighbors, while OSPF is a link-state protocol that builds a complete topology database using flooded link-state advertisements."
}, {
    id: 99,
    question: "Which of the below routing method always ensures the shortest path even though routers crash during course of routing?",
    options: ["Dijkstra Routing", "Flooding", "Distance Vector Routing", "Link State Routing"],
    correctAnswer: 1,
    explanation: "Flooding sends packets to all possible paths, ensuring delivery even if some routers fail. While inefficient, it guarantees the shortest path will be found because it explores all routes simultaneously."
}, {
    id: 100,
    question: "You are the network administrator for your company. You want to restrict all ping attempts from outside your company from reaching internal hosts. Your internal network is using the IP network of 200.15.24.0/24. Then which command should be executed on the corporate boundary router to accomplish the task?",
    options: ["Router (config)#access-list 100 deny TCP any 200.15.24.0/24 eq echo", "Router (config)#access-list 1 deny ICMP any 200.15.24.0 0.0.0.255 eq ping", "Router (config)#access-list 100 deny ICMP any 200.15.24.0 0.0.0.255 eq echo", "Router (config)#access-list 1 deny ICMP any 200.15.24.0 0.0.0.255 eq echo-request"],
    correctAnswer: 3,
    explanation: "The correct command should use ICMP protocol (not TCP) and echo-request type (which is the proper ICMP type for ping requests). Standard access lists (1-99) can filter only by source address, while extended access lists (100-199) can filter by protocol and other parameters. The correct format is: Router (config)#access-list 1 deny ICMP any 200.15.24.0 0.0.0.255 eq echo-request"
}];