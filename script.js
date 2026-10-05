const RECORD = [
  {
    "week": 1,
    "programs": [
      {
        "id": 1,
        "title": "Comparative Table — Java, C, C++, Python & JavaScript",
        "type": "table",
        "code": "",
        "output": "",
        "description": "Java programming exercise demonstrating comparative table — java, c, c++, python & javascript."
      }
    ]
  },
  {
    "week": 2,
    "programs": [
      {
        "id": 1,
        "title": "Oracle JDK Installation — Windows",
        "type": "installation",
        "code": "",
        "output": "Java installation verified successfully.\njava -version",
        "description": "Install Oracle JDK on Windows, configure JAVA_HOME and PATH, and verify the installation."
      },
      {
        "id": 2,
        "title": "OpenJDK Installation — Windows",
        "type": "installation",
        "code": "",
        "output": "Java installation verified successfully.\njava -version",
        "description": "Install OpenJDK on Windows, configure JAVA_HOME and PATH, and verify the installation."
      }
    ]
  },
  {
    "week": 3,
    "programs": [
      {
        "id": 1,
        "title": "Hello, Java!",
        "type": "java",
        "code": "public class HelloJava {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, Java!\");\n    }\n}",
        "output": "Hello, Java!",
        "description": "Java programming exercise demonstrating hello, java!."
      },
      {
        "id": 2,
        "title": "Variables of All Primitive Data Types",
        "type": "java",
        "code": "public class DataTypesDemo {\n    public static void main(String[] args) {\n        byte b = 10;\n        short s = 200;\n        int i = 1000;\n        long l = 100000L;\n        float f = 12.5f;\n        double d = 25.75;\n        char c = 'A';\n        boolean flag = true;\n\n        System.out.println(\"byte = \" + b);\n        System.out.println(\"short = \" + s);\n        System.out.println(\"int = \" + i);\n        System.out.println(\"long = \" + l);\n        System.out.println(\"float = \" + f);\n        System.out.println(\"double = \" + d);\n        System.out.println(\"char = \" + c);\n        System.out.println(\"boolean = \" + flag);\n    }\n}",
        "output": "byte = 10\nshort = 200\nint = 1000\nlong = 100000\nfloat = 12.5\ndouble = 25.75\nchar = A\nboolean = true",
        "description": "Java programming exercise demonstrating variables of all primitive data types."
      },
      {
        "id": 3,
        "title": "Arithmetic Operations on Integers",
        "type": "java",
        "code": "public class IntegerOperations {\n    public static void main(String[] args) {\n        int a = 20, b = 5;\n        System.out.println(\"Addition = \" + (a + b));\n        System.out.println(\"Subtraction = \" + (a - b));\n        System.out.println(\"Multiplication = \" + (a * b));\n        System.out.println(\"Division = \" + (a / b));\n        System.out.println(\"Modulus = \" + (a % b));\n    }\n}",
        "output": "Addition = 25\nSubtraction = 15\nMultiplication = 100\nDivision = 4\nModulus = 0",
        "description": "Java programming exercise demonstrating arithmetic operations on integers."
      },
      {
        "id": 4,
        "title": "Arithmetic Operations on Floating-Point Numbers",
        "type": "java",
        "code": "public class FloatOperations {\n    public static void main(String[] args) {\n        double a = 12.5, b = 2.5;\n        System.out.println(\"Addition = \" + (a + b));\n        System.out.println(\"Subtraction = \" + (a - b));\n        System.out.println(\"Multiplication = \" + (a * b));\n        System.out.println(\"Division = \" + (a / b));\n    }\n}",
        "output": "Addition = 15.0\nSubtraction = 10.0\nMultiplication = 31.25\nDivision = 5.0",
        "description": "Java programming exercise demonstrating arithmetic operations on floating-point numbers."
      },
      {
        "id": 5,
        "title": "Character and ASCII/Unicode Value",
        "type": "java",
        "code": "public class CharacterValue {\n    public static void main(String[] args) {\n        char ch = 'A';\n        System.out.println(\"Character = \" + ch);\n        System.out.println(\"Unicode value = \" + (int) ch);\n    }\n}",
        "output": "Character = A\nUnicode value = 65",
        "description": "Java programming exercise demonstrating character and ascii/unicode value."
      },
      {
        "id": 6,
        "title": "Boolean Variables and Expressions",
        "type": "java",
        "code": "public class BooleanDemo {\n    public static void main(String[] args) {\n        int a = 10, b = 20;\n        boolean x = a < b;\n        boolean y = a == b;\n\n        System.out.println(\"a < b = \" + x);\n        System.out.println(\"a == b = \" + y);\n    }\n}",
        "output": "a < b = true\na == b = false",
        "description": "Java programming exercise demonstrating boolean variables and expressions."
      },
      {
        "id": 7,
        "title": "Different Types of Variables",
        "type": "java",
        "code": "public class VariablesDemo {\n    public static void main(String[] args) {\n        int age = 18;\n        double marks = 89.5;\n        char grade = 'A';\n        boolean passed = true;\n        String name = \"Tarun\";\n\n        System.out.println(\"Name = \" + name);\n        System.out.println(\"Age = \" + age);\n        System.out.println(\"Marks = \" + marks);\n        System.out.println(\"Grade = \" + grade);\n        System.out.println(\"Passed = \" + passed);\n    }\n}",
        "output": "Name = Tarun\nAge = 18\nMarks = 89.5\nGrade = A\nPassed = true",
        "description": "Java programming exercise demonstrating different types of variables."
      },
      {
        "id": 8,
        "title": "Swap Two Variables Using Temporary Variable",
        "type": "java",
        "code": "public class SwapDemo {\n    public static void main(String[] args) {\n        int a = 10, b = 20;\n        int temp = a;\n        a = b;\n        b = temp;\n\n        System.out.println(\"After swapping:\");\n        System.out.println(\"a = \" + a);\n        System.out.println(\"b = \" + b);\n    }\n}",
        "output": "After swapping:\na = 20\nb = 10",
        "description": "Java programming exercise demonstrating swap two variables using temporary variable."
      },
      {
        "id": 9,
        "title": "Widening Type Conversion",
        "type": "java",
        "code": "public class WideningDemo {\n    public static void main(String[] args) {\n        int number = 100;\n        double value = number;\n\n        System.out.println(\"Integer = \" + number);\n        System.out.println(\"Double = \" + value);\n    }\n}",
        "output": "Integer = 100\nDouble = 100.0",
        "description": "Java programming exercise demonstrating widening type conversion."
      },
      {
        "id": 10,
        "title": "Narrowing Type Casting",
        "type": "java",
        "code": "public class NarrowingDemo {\n    public static void main(String[] args) {\n        double number = 99.99;\n        int value = (int) number;\n\n        System.out.println(\"Double = \" + number);\n        System.out.println(\"Integer after casting = \" + value);\n    }\n}",
        "output": "Double = 99.99\nInteger after casting = 99",
        "description": "Java programming exercise demonstrating narrowing type casting."
      },
      {
        "id": 11,
        "title": "Character and ASCII Conversion",
        "type": "java",
        "code": "public class CharAsciiDemo {\n    public static void main(String[] args) {\n        char ch = 'B';\n        int ascii = ch;\n        int number = 67;\n        char converted = (char) number;\n\n        System.out.println(\"Character = \" + ch);\n        System.out.println(\"ASCII/Unicode = \" + ascii);\n        System.out.println(\"67 converted to character = \" + converted);\n    }\n}",
        "output": "Character = B\nASCII/Unicode = 66\n67 converted to character = C",
        "description": "Java programming exercise demonstrating character and ascii conversion."
      },
      {
        "id": 12,
        "title": "Even or Odd",
        "type": "java",
        "code": "public class EvenOdd {\n    public static void main(String[] args) {\n        int number = 24;\n\n        if (number % 2 == 0)\n            System.out.println(number + \" is Even\");\n        else\n            System.out.println(number + \" is Odd\");\n    }\n}",
        "output": "24 is Even",
        "description": "Java programming exercise demonstrating even or odd."
      },
      {
        "id": 13,
        "title": "Largest of Two Numbers",
        "type": "java",
        "code": "public class LargestTwo {\n    public static void main(String[] args) {\n        int a = 45, b = 32;\n\n        if (a > b)\n            System.out.println(a + \" is larger\");\n        else\n            System.out.println(b + \" is larger\");\n    }\n}",
        "output": "45 is larger",
        "description": "Java programming exercise demonstrating largest of two numbers."
      },
      {
        "id": 14,
        "title": "Reserved Keywords",
        "type": "java",
        "code": "public class KeywordsDemo {\n    public static void main(String[] args) {\n        System.out.println(\"Examples of Java reserved keywords:\");\n        System.out.println(\"class, public, static, void, int, if, else, for, while, return\");\n    }\n}",
        "output": "Examples of Java reserved keywords:\nclass, public, static, void, int, if, else, for, while, return",
        "description": "Java programming exercise demonstrating reserved keywords."
      },
      {
        "id": 15,
        "title": "For Loop — Numbers 1 to 10",
        "type": "java",
        "code": "public class ForLoopDemo {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 10; i++) {\n            System.out.println(i);\n        }\n    }\n}",
        "output": "1\n2\n3\n4\n5\n6\n7\n8\n9\n10",
        "description": "Java programming exercise demonstrating for loop — numbers 1 to 10."
      }
    ]
  },
  {
    "week": 4,
    "programs": []
  },
  {
    "week": 5,
    "programs": []
  },
  {
    "week": 6,
    "programs": [
      {
        "id": 1,
        "title": "Student Information System",
        "type": "class",
        "code": "class Student {\n    int id;\n    String name;\n    double marks;\n\n    void display() {\n        System.out.println(\"ID: \" + id);\n        System.out.println(\"Name: \" + name);\n        System.out.println(\"Marks: \" + marks);\n    }\n}\n\npublic class StudentInformation {\n    public static void main(String[] args) {\n        Student s = new Student();\n        s.id = 101;\n        s.name = \"Tarun\";\n        s.marks = 89.5;\n        s.display();\n    }\n}",
        "output": "ID: 101\nName: Tarun\nMarks: 89.5",
        "description": "Java programming exercise demonstrating student information system."
      },
      {
        "id": 2,
        "title": "Employee Information System",
        "type": "class",
        "code": "class Employee {\n    int id;\n    String name;\n    double salary;\n\n    void display() {\n        System.out.println(\"ID: \" + id);\n        System.out.println(\"Name: \" + name);\n        System.out.println(\"Salary: \" + salary);\n    }\n}\n\npublic class EmployeeInformation {\n    public static void main(String[] args) {\n        Employee e = new Employee();\n        e.id = 501;\n        e.name = \"Ravi\";\n        e.salary = 35000;\n        e.display();\n    }\n}",
        "output": "ID: 501\nName: Ravi\nSalary: 35000.0",
        "description": "Java programming exercise demonstrating employee information system."
      },
      {
        "id": 3,
        "title": "Book Details — Multiple Objects",
        "type": "class",
        "code": "class Book {\n    int id;\n    String title;\n    String author;\n\n    Book(int id, String title, String author) {\n        this.id = id;\n        this.title = title;\n        this.author = author;\n    }\n\n    void display() {\n        System.out.println(id + \" | \" + title + \" | \" + author);\n    }\n}\n\npublic class BookDetails {\n    public static void main(String[] args) {\n        Book b1 = new Book(1, \"Java Basics\", \"James\");\n        Book b2 = new Book(2, \"DSA\", \"Mark\");\n        Book b3 = new Book(3, \"OOP\", \"Robert\");\n        b1.display(); b2.display(); b3.display();\n    }\n}",
        "output": "1 | Java Basics | James\n2 | DSA | Mark\n3 | OOP | Robert",
        "description": "Java programming exercise demonstrating book details — multiple objects."
      },
      {
        "id": 4,
        "title": "Array of Student Objects",
        "type": "class",
        "code": "import java.util.Scanner;\n\nclass Student {\n    int id;\n    String name;\n\n    Student(int id, String name) {\n        this.id = id;\n        this.name = name;\n    }\n\n    void display() {\n        System.out.println(id + \" - \" + name);\n    }\n}\n\npublic class StudentArray {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Student[] students = new Student[5];\n\n        for (int i = 0; i < 5; i++) {\n            System.out.print(\"Enter ID: \");\n            int id = sc.nextInt();\n            System.out.print(\"Enter name: \");\n            String name = sc.next();\n            students[i] = new Student(id, name);\n        }\n\n        for (Student s : students) s.display();\n    }\n}",
        "output": "Sample output generated from the program.\nRun the program to verify the output.",
        "description": "Java programming exercise demonstrating array of student objects."
      },
      {
        "id": 5,
        "title": "Reference Assignment",
        "type": "class",
        "code": "class Student {\n    String name;\n    Student(String name) { this.name = name; }\n    void display() { System.out.println(\"Name: \" + name); }\n}\n\npublic class ReferenceAssignment {\n    public static void main(String[] args) {\n        Student s1 = new Student(\"Tarun\");\n        Student s2 = s1;\n        s2.display();\n    }\n}",
        "output": "Name: Tarun",
        "description": "Java programming exercise demonstrating reference assignment."
      },
      {
        "id": 6,
        "title": "Comparing Object References",
        "type": "class",
        "code": "class Student { }\n\npublic class CompareReferences {\n    public static void main(String[] args) {\n        Student s1 = new Student();\n        Student s2 = s1;\n        Student s3 = new Student();\n\n        System.out.println(\"s1 == s2: \" + (s1 == s2));\n        System.out.println(\"s1 == s3: \" + (s1 == s3));\n    }\n}",
        "output": "s1 == s2: true\ns1 == s3: false",
        "description": "Java programming exercise demonstrating comparing object references."
      },
      {
        "id": 7,
        "title": "Calculator Using Methods",
        "type": "class",
        "code": "class Calculator {\n    int add(int a, int b) { return a + b; }\n    int subtract(int a, int b) { return a - b; }\n    int multiply(int a, int b) { return a * b; }\n    double divide(int a, int b) { return (double)a / b; }\n}\n\npublic class CalculatorDemo {\n    public static void main(String[] args) {\n        Calculator c = new Calculator();\n        System.out.println(\"Addition = \" + c.add(20, 5));\n        System.out.println(\"Subtraction = \" + c.subtract(20, 5));\n        System.out.println(\"Multiplication = \" + c.multiply(20, 5));\n        System.out.println(\"Division = \" + c.divide(20, 5));\n    }\n}",
        "output": "Addition = 25\nSubtraction = 15\nMultiplication = 100\nDivision = 4.0",
        "description": "Java programming exercise demonstrating calculator using methods."
      },
      {
        "id": 8,
        "title": "Rectangle Operations",
        "type": "class",
        "code": "class Rectangle {\n    double length, width;\n\n    Rectangle(double length, double width) {\n        this.length = length;\n        this.width = width;\n    }\n\n    double area() { return length * width; }\n    double perimeter() { return 2 * (length + width); }\n}\n\npublic class RectangleDemo {\n    public static void main(String[] args) {\n        Rectangle r = new Rectangle(10, 5);\n        System.out.println(\"Area = \" + r.area());\n        System.out.println(\"Perimeter = \" + r.perimeter());\n    }\n}",
        "output": "Area = 50.0\nPerimeter = 30.0",
        "description": "Java programming exercise demonstrating rectangle operations."
      },
      {
        "id": 9,
        "title": "Student Constructors",
        "type": "class",
        "code": "class Student {\n    String name;\n    int age;\n\n    Student() {\n        name = \"Unknown\";\n        age = 0;\n    }\n\n    Student(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n\n    void display() {\n        System.out.println(name + \" \" + age);\n    }\n}\n\npublic class StudentConstructors {\n    public static void main(String[] args) {\n        new Student().display();\n        new Student(\"Tarun\", 18).display();\n    }\n}",
        "output": "Unknown 0\nTarun 18",
        "description": "Java programming exercise demonstrating student constructors."
      },
      {
        "id": 10,
        "title": "Constructor Overloading",
        "type": "class",
        "code": "class Box {\n    int length, width, height;\n\n    Box() { length = width = height = 1; }\n    Box(int side) { length = width = height = side; }\n    Box(int l, int w, int h) {\n        length = l; width = w; height = h;\n    }\n\n    void display() {\n        System.out.println(length + \" x \" + width + \" x \" + height);\n    }\n}\n\npublic class ConstructorOverloading {\n    public static void main(String[] args) {\n        new Box().display();\n        new Box(5).display();\n        new Box(2, 3, 4).display();\n    }\n}",
        "output": "1 x 1 x 1\n5 x 5 x 5\n2 x 3 x 4",
        "description": "Java programming exercise demonstrating constructor overloading."
      },
      {
        "id": 11,
        "title": "Using this Keyword",
        "type": "class",
        "code": "class Student {\n    String name;\n\n    Student(String name) {\n        this.name = name;\n    }\n\n    void display() {\n        System.out.println(\"Student Name: \" + this.name);\n    }\n}\n\npublic class ThisKeyword {\n    public static void main(String[] args) {\n        Student s = new Student(\"Tarun\");\n        s.display();\n    }\n}",
        "output": "Student Name: Tarun",
        "description": "Java programming exercise demonstrating using this keyword."
      },
      {
        "id": 12,
        "title": "Constructor Chaining",
        "type": "class",
        "code": "class Student {\n    String name;\n    int age;\n\n    Student() {\n        this(\"Tarun\");\n    }\n\n    Student(String name) {\n        this(name, 18);\n    }\n\n    Student(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n\n    void display() {\n        System.out.println(name + \" \" + age);\n    }\n}\n\npublic class ConstructorChaining {\n    public static void main(String[] args) {\n        new Student().display();\n    }\n}",
        "output": "Tarun 18",
        "description": "Java programming exercise demonstrating constructor chaining."
      },
      {
        "id": 13,
        "title": "Demonstrating Garbage Collection",
        "type": "class",
        "code": "class Demo {\n    protected void finalize() {\n        System.out.println(\"Object is garbage collected\");\n    }\n}\n\npublic class GarbageCollectionDemo {\n    public static void main(String[] args) {\n        Demo d1 = new Demo();\n        Demo d2 = new Demo();\n        d1 = null;\n        d2 = null;\n        System.gc();\n        System.out.println(\"Garbage collection requested\");\n    }\n}",
        "output": "Garbage collection requested\n(Object collection message may appear depending on JVM)",
        "description": "Java programming exercise demonstrating demonstrating garbage collection."
      },
      {
        "id": 14,
        "title": "Object Eligibility for Garbage Collection",
        "type": "class",
        "code": "class Demo { }\n\npublic class GarbageEligibility {\n    public static void main(String[] args) {\n        Demo a = new Demo();\n        Demo b = new Demo();\n\n        a = null;       // eligible\n        b = new Demo(); // old object eligible\n\n        System.out.println(\"Objects became eligible for garbage collection.\");\n        System.gc();\n    }\n}",
        "output": "Objects became eligible for garbage collection.",
        "description": "Java programming exercise demonstrating object eligibility for garbage collection."
      },
      {
        "id": 15,
        "title": "Method Overloading",
        "type": "class",
        "code": "class Calculator {\n    int add(int a, int b) { return a + b; }\n    int add(int a, int b, int c) { return a + b + c; }\n    double add(double a, double b) { return a + b; }\n}\n\npublic class MethodOverloading {\n    public static void main(String[] args) {\n        Calculator c = new Calculator();\n        System.out.println(c.add(10, 20));\n        System.out.println(c.add(10, 20, 30));\n        System.out.println(c.add(2.5, 3.5));\n    }\n}",
        "output": "30\n60\n6.0",
        "description": "Java programming exercise demonstrating method overloading."
      },
      {
        "id": 16,
        "title": "Overloading Area Methods",
        "type": "class",
        "code": "class Area {\n    double area(double r) { return Math.PI * r * r; }\n    double area(double l, double w) { return l * w; }\n    int area(int s) { return s * s; }\n}\n\npublic class AreaOverloading {\n    public static void main(String[] args) {\n        Area a = new Area();\n        System.out.println(\"Circle = \" + a.area(5.0));\n        System.out.println(\"Rectangle = \" + a.area(4.0, 6.0));\n        System.out.println(\"Square = \" + a.area(5));\n    }\n}",
        "output": "Circle = 78.53981633974483\nRectangle = 24.0\nSquare = 25",
        "description": "Java programming exercise demonstrating overloading area methods."
      },
      {
        "id": 17,
        "title": "Passing Student Object",
        "type": "class",
        "code": "class Student {\n    String name;\n    int age;\n\n    Student(String name, int age) {\n        this.name = name; this.age = age;\n    }\n}\n\npublic class PassingStudent {\n    static void display(Student s) {\n        System.out.println(\"Name: \" + s.name);\n        System.out.println(\"Age: \" + s.age);\n    }\n\n    public static void main(String[] args) {\n        display(new Student(\"Tarun\", 18));\n    }\n}",
        "output": "Name: Tarun\nAge: 18",
        "description": "Java programming exercise demonstrating passing student object."
      },
      {
        "id": 18,
        "title": "Comparing Employee Salaries",
        "type": "class",
        "code": "class Employee {\n    String name;\n    double salary;\n\n    Employee(String name, double salary) {\n        this.name = name; this.salary = salary;\n    }\n}\n\npublic class EmployeeSalary {\n    public static void main(String[] args) {\n        Employee e1 = new Employee(\"Ravi\", 40000);\n        Employee e2 = new Employee(\"Kiran\", 50000);\n\n        if (e1.salary > e2.salary)\n            System.out.println(e1.name + \" has higher salary\");\n        else\n            System.out.println(e2.name + \" has higher salary\");\n    }\n}",
        "output": "Kiran has higher salary",
        "description": "Java programming exercise demonstrating comparing employee salaries."
      },
      {
        "id": 19,
        "title": "Returning a Student Object",
        "type": "class",
        "code": "class Student {\n    String name;\n    Student(String name) { this.name = name; }\n}\n\npublic class ReturnStudent {\n    static Student createStudent() {\n        return new Student(\"Tarun\");\n    }\n\n    public static void main(String[] args) {\n        Student s = createStudent();\n        System.out.println(\"Student Name: \" + s.name);\n    }\n}",
        "output": "Student Name: Tarun",
        "description": "Java programming exercise demonstrating returning a student object."
      },
      {
        "id": 20,
        "title": "Returning a Bank Account Object",
        "type": "class",
        "code": "class BankAccount {\n    String name;\n    double balance;\n\n    BankAccount(String name, double balance) {\n        this.name = name; this.balance = balance;\n    }\n}\n\npublic class ReturnBankAccount {\n    static BankAccount update(BankAccount a) {\n        a.balance += 1000;\n        return a;\n    }\n\n    public static void main(String[] args) {\n        BankAccount a = new BankAccount(\"Tarun\", 5000);\n        a = update(a);\n        System.out.println(\"Updated Balance = \" + a.balance);\n    }\n}",
        "output": "Updated Balance = 6000.0",
        "description": "Java programming exercise demonstrating returning a bank account object."
      },
      {
        "id": 21,
        "title": "Static Variable",
        "type": "class",
        "code": "class Student {\n    static int count = 0;\n\n    Student() {\n        count++;\n    }\n}\n\npublic class StaticVariable {\n    public static void main(String[] args) {\n        new Student();\n        new Student();\n        new Student();\n        System.out.println(\"Number of students = \" + Student.count);\n    }\n}",
        "output": "Number of students = 3",
        "description": "Java programming exercise demonstrating static variable."
      },
      {
        "id": 22,
        "title": "Static Methods",
        "type": "class",
        "code": "class MathUtil {\n    static int square(int n) { return n * n; }\n    static int cube(int n) { return n * n * n; }\n    static int factorial(int n) {\n        int f = 1;\n        for (int i = 1; i <= n; i++) f *= i;\n        return f;\n    }\n}\n\npublic class StaticMethods {\n    public static void main(String[] args) {\n        System.out.println(\"Square = \" + MathUtil.square(5));\n        System.out.println(\"Cube = \" + MathUtil.cube(3));\n        System.out.println(\"Factorial = \" + MathUtil.factorial(5));\n    }\n}",
        "output": "Square = 25\nCube = 27\nFactorial = 120",
        "description": "Java programming exercise demonstrating static methods."
      },
      {
        "id": 23,
        "title": "Final Keyword",
        "type": "class",
        "code": "final class FinalClass { }\n\nclass Demo {\n    final int VALUE = 10;\n\n    final void display() {\n        System.out.println(\"Final value = \" + VALUE);\n    }\n}\n\npublic class FinalKeyword {\n    public static void main(String[] args) {\n        Demo d = new Demo();\n        d.display();\n        System.out.println(\"Final methods cannot be overridden.\");\n        System.out.println(\"Final classes cannot be inherited.\");\n    }\n}",
        "output": "Final value = 10\nFinal methods cannot be overridden.\nFinal classes cannot be inherited.",
        "description": "Java programming exercise demonstrating final keyword."
      },
      {
        "id": 24,
        "title": "Blank Final Variable",
        "type": "class",
        "code": "class Student {\n    final int rollNo;\n\n    Student(int rollNo) {\n        this.rollNo = rollNo;\n    }\n\n    void display() {\n        System.out.println(\"Roll Number = \" + rollNo);\n    }\n}\n\npublic class BlankFinal {\n    public static void main(String[] args) {\n        new Student(101).display();\n    }\n}",
        "output": "Roll Number = 101",
        "description": "Java programming exercise demonstrating blank final variable."
      },
      {
        "id": 25,
        "title": "College and Department — Nested Class",
        "type": "class",
        "code": "class College {\n    String name = \"SAHE\";\n\n    static class Department {\n        void display() {\n            System.out.println(\"Department: AI & ML\");\n        }\n    }\n}\n\npublic class CollegeDepartment {\n    public static void main(String[] args) {\n        College.Department d = new College.Department();\n        d.display();\n    }\n}",
        "output": "Department: AI & ML",
        "description": "Java programming exercise demonstrating college and department — nested class."
      },
      {
        "id": 26,
        "title": "Employee Address — Nested Class",
        "type": "class",
        "code": "class Employee {\n    String name = \"Ravi\";\n\n    static class Address {\n        String city = \"Vijayawada\";\n        void display() {\n            System.out.println(\"City: \" + city);\n        }\n    }\n}\n\npublic class EmployeeAddress {\n    public static void main(String[] args) {\n        Employee.Address a = new Employee.Address();\n        a.display();\n    }\n}",
        "output": "City: Vijayawada",
        "description": "Java programming exercise demonstrating employee address — nested class."
      },
      {
        "id": 27,
        "title": "Student Address — Inner Class",
        "type": "class",
        "code": "class StudentAddressInner {\n    String name = \"Tarun\";\n\n    class Address {\n        String city = \"Vijayawada\";\n\n        void display() {\n            System.out.println(name + \" lives in \" + city);\n        }\n    }\n}\n\npublic class StudentAddressDemo {\n    public static void main(String[] args) {\n        StudentAddressInner s = new StudentAddressInner();\n        StudentAddressInner.Address a = s.new Address();\n        a.display();\n    }\n}",
        "output": "Tarun lives in Vijayawada",
        "description": "Java programming exercise demonstrating student address — inner class."
      },
      {
        "id": 28,
        "title": "Library Management — Inner Class",
        "type": "class",
        "code": "class LibraryBookManager {\n    String libraryName = \"Central Library\";\n\n    class Book {\n        String title = \"Java Programming\";\n\n        void display() {\n            System.out.println(libraryName);\n            System.out.println(\"Book: \" + title);\n        }\n    }\n}\n\npublic class LibraryDemo {\n    public static void main(String[] args) {\n        LibraryBookManager l = new LibraryBookManager();\n        LibraryBookManager.Book b = l.new Book();\n        b.display();\n    }\n}",
        "output": "Central Library\nBook: Java Programming",
        "description": "Java programming exercise demonstrating library management — inner class."
      }
    ]
  },
  {
    "week": 7,
    "programs": [
      {
        "id": 1,
        "title": "String Constructors",
        "type": "java",
        "code": "import java.util.Arrays;\n\npublic class StringConstructors {\n    public static void main(String[] args) {\n        String s1 = \"Java\";\n        String s2 = new String(\"Programming\");\n\n        char[] chars = {'J','a','v','a'};\n        String s3 = new String(chars);\n\n        byte[] bytes = {72, 105};\n        String s4 = new String(bytes);\n\n        System.out.println(s1);\n        System.out.println(s2);\n        System.out.println(s3);\n        System.out.println(s4);\n    }\n}",
        "output": "Java\nProgramming\nJava\nHi",
        "description": "Java programming exercise demonstrating string constructors."
      },
      {
        "id": 2,
        "title": "StringBuffer Class",
        "type": "java",
        "code": "public class StringBufferDemo {\n    public static void main(String[] args) {\n        StringBuffer sb = new StringBuffer(\"Java\");\n\n        sb.append(\" Programming\");\n        System.out.println(sb);\n\n        sb.insert(5, \"Language \");\n        System.out.println(sb);\n\n        sb.replace(0, 4, \"Core Java\");\n        System.out.println(sb);\n\n        sb.delete(0, 5);\n        System.out.println(sb);\n\n        sb.reverse();\n        System.out.println(sb);\n    }\n}",
        "output": "Java Programming\nJava Language Programming\nCore Java Programming\nJava Programming\nProgramming avaJ",
        "description": "Java programming exercise demonstrating stringbuffer class."
      },
      {
        "id": 3,
        "title": "StringTokenizer Class",
        "type": "java",
        "code": "import java.util.StringTokenizer;\n\npublic class StringTokenizerDemo {\n    public static void main(String[] args) {\n        String sentence = \"Java is easy to learn\";\n        StringTokenizer st = new StringTokenizer(sentence);\n\n        while (st.hasMoreTokens())\n            System.out.println(st.nextToken());\n\n        StringTokenizer st2 = new StringTokenizer(\"Java,C,Python\", \",\");\n        System.out.println(\"Token count = \" + st2.countTokens());\n\n        while (st2.hasMoreTokens())\n            System.out.println(st2.nextToken());\n    }\n}",
        "output": "Java\nis\neasy\nto\nlearn\nToken count = 3\nJava\nC\nPython",
        "description": "Java programming exercise demonstrating stringtokenizer class."
      },
      {
        "id": 4,
        "title": "Basic Inheritance",
        "type": "java",
        "code": "class Parent {\n    void displayParent() {\n        System.out.println(\"Parent method\");\n    }\n}\n\nclass Child extends Parent {\n    void displayChild() {\n        System.out.println(\"Child method\");\n    }\n}\n\npublic class BasicInheritance {\n    public static void main(String[] args) {\n        Child c = new Child();\n        c.displayParent();\n        c.displayChild();\n    }\n}",
        "output": "Parent method\nChild method",
        "description": "Java programming exercise demonstrating basic inheritance."
      },
      {
        "id": 5,
        "title": "Using super Keyword",
        "type": "java",
        "code": "class Parent {\n    int value = 10;\n\n    void display() {\n        System.out.println(\"Parent display method\");\n    }\n}\n\nclass Child extends Parent {\n    int value = 20;\n\n    void show() {\n        System.out.println(\"Child value = \" + value);\n        System.out.println(\"Parent value = \" + super.value);\n        super.display();\n    }\n}\n\npublic class SuperDemo {\n    public static void main(String[] args) {\n        new Child().show();\n    }\n}",
        "output": "Child value = 20\nParent value = 10\nParent display method",
        "description": "Java programming exercise demonstrating using super keyword."
      }
    ]
  },
  {
    "week": 8,
    "programs": [
      {
        "id": 1,
        "title": "Single Inheritance",
        "type": "inheritance",
        "code": "class Person {\n    String name = \"Tarun\";\n\n    void displayPerson() {\n        System.out.println(\"Name: \" + name);\n    }\n}\n\nclass Student extends Person {\n    int rollNo = 101;\n\n    void displayStudent() {\n        System.out.println(\"Roll No: \" + rollNo);\n    }\n}\n\npublic class SingleInheritance {\n    public static void main(String[] args) {\n        Student s = new Student();\n        s.displayPerson();\n        s.displayStudent();\n    }\n}",
        "output": "Name: Tarun\nRoll No: 101",
        "description": "Java programming exercise demonstrating single inheritance."
      },
      {
        "id": 2,
        "title": "Using super Keyword",
        "type": "inheritance",
        "code": "class Person {\n    String name = \"Parent\";\n\n    void display() {\n        System.out.println(\"Person display()\");\n    }\n}\n\nclass Student extends Person {\n    String name = \"Student\";\n\n    void show() {\n        System.out.println(\"Child name = \" + name);\n        System.out.println(\"Parent name = \" + super.name);\n        super.display();\n    }\n}\n\npublic class SuperKeyword {\n    public static void main(String[] args) {\n        new Student().show();\n    }\n}",
        "output": "Child value = 20\nParent value = 10\nParent display method",
        "description": "Java programming exercise demonstrating using super keyword."
      },
      {
        "id": 3,
        "title": "Multilevel Inheritance",
        "type": "inheritance",
        "code": "class Person {\n    void person() { System.out.println(\"Person\"); }\n}\n\nclass Employee extends Person {\n    void employee() { System.out.println(\"Employee\"); }\n}\n\nclass Manager extends Employee {\n    void manager() { System.out.println(\"Manager\"); }\n}\n\npublic class MultilevelInheritance {\n    public static void main(String[] args) {\n        Manager m = new Manager();\n        m.person();\n        m.employee();\n        m.manager();\n    }\n}",
        "output": "Person\nEmployee\nManager",
        "description": "Java programming exercise demonstrating multilevel inheritance."
      },
      {
        "id": 4,
        "title": "Method Overriding",
        "type": "inheritance",
        "code": "class Animal {\n    void sound() { System.out.println(\"Animal sound\"); }\n}\n\nclass Dog extends Animal {\n    @Override\n    void sound() { System.out.println(\"Dog barks\"); }\n}\n\nclass Cat extends Animal {\n    @Override\n    void sound() { System.out.println(\"Cat meows\"); }\n}\n\npublic class MethodOverriding {\n    public static void main(String[] args) {\n        new Dog().sound();\n        new Cat().sound();\n    }\n}",
        "output": "Dog barks\nCat meows",
        "description": "Java programming exercise demonstrating method overriding."
      },
      {
        "id": 5,
        "title": "Dynamic Method Dispatch",
        "type": "inheritance",
        "code": "class Shape {\n    void draw() { System.out.println(\"Shape\"); }\n}\n\nclass Circle extends Shape {\n    void draw() { System.out.println(\"Circle\"); }\n}\n\nclass Rectangle extends Shape {\n    void draw() { System.out.println(\"Rectangle\"); }\n}\n\nclass Triangle extends Shape {\n    void draw() { System.out.println(\"Triangle\"); }\n}\n\npublic class DynamicDispatch {\n    public static void main(String[] args) {\n        Shape s;\n        s = new Circle(); s.draw();\n        s = new Rectangle(); s.draw();\n        s = new Triangle(); s.draw();\n    }\n}",
        "output": "Circle\nRectangle\nTriangle",
        "description": "Java programming exercise demonstrating dynamic method dispatch."
      },
      {
        "id": 6,
        "title": "super with Method Overriding",
        "type": "inheritance",
        "code": "class Parent {\n    void display() { System.out.println(\"Parent display\"); }\n}\n\nclass Child extends Parent {\n    @Override\n    void display() {\n        super.display();\n        System.out.println(\"Child display\");\n    }\n}\n\npublic class SuperOverride {\n    public static void main(String[] args) {\n        new Child().display();\n    }\n}",
        "output": "Parent display\nChild display",
        "description": "Java programming exercise demonstrating super with method overriding."
      },
      {
        "id": 7,
        "title": "Multilevel Inheritance for Salary Calculation",
        "type": "inheritance",
        "code": "class Employee {\n    double salary = 30000;\n}\n\nclass Developer extends Employee {\n    double bonus = 5000;\n}\n\nclass SeniorDeveloper extends Developer {\n    double incentive = 10000;\n\n    void totalSalary() {\n        System.out.println(\"Total Salary = \" + (salary + bonus + incentive));\n    }\n}\n\npublic class SalaryCalculation {\n    public static void main(String[] args) {\n        new SeniorDeveloper().totalSalary();\n    }\n}",
        "output": "Total Salary = 45000.0",
        "description": "Java programming exercise demonstrating multilevel inheritance for salary calculation."
      },
      {
        "id": 8,
        "title": "Dynamic Method Dispatch for Bank Accounts",
        "type": "inheritance",
        "code": "class BankAccount {\n    void interest() { System.out.println(\"General bank account\"); }\n}\n\nclass SavingsAccount extends BankAccount {\n    void interest() { System.out.println(\"Savings account interest\"); }\n}\n\nclass CurrentAccount extends BankAccount {\n    void interest() { System.out.println(\"Current account interest\"); }\n}\n\npublic class BankDispatch {\n    public static void main(String[] args) {\n        BankAccount a;\n        a = new SavingsAccount(); a.interest();\n        a = new CurrentAccount(); a.interest();\n    }\n}",
        "output": "Savings account interest\nCurrent account interest",
        "description": "Java programming exercise demonstrating dynamic method dispatch for bank accounts."
      },
      {
        "id": 9,
        "title": "Constructor Execution in Multilevel Inheritance",
        "type": "inheritance",
        "code": "class A {\n    A() { System.out.println(\"A constructor\"); }\n}\n\nclass B extends A {\n    B() { System.out.println(\"B constructor\"); }\n}\n\nclass C extends B {\n    C() { System.out.println(\"C constructor\"); }\n}\n\npublic class ConstructorOrder {\n    public static void main(String[] args) {\n        new C();\n    }\n}",
        "output": "A constructor\nB constructor\nC constructor",
        "description": "Java programming exercise demonstrating constructor execution in multilevel inheritance."
      },
      {
        "id": 10,
        "title": "Banking Application Using Inheritance",
        "type": "inheritance",
        "code": "class BankAccount {\n    String name;\n    double balance;\n\n    BankAccount(String name, double balance) {\n        this.name = name;\n        this.balance = balance;\n    }\n\n    void deposit(double amount) {\n        balance += amount;\n    }\n\n    void display() {\n        System.out.println(\"Account Holder: \" + name);\n        System.out.println(\"Balance: \" + balance);\n    }\n}\n\nclass SavingsAccount extends BankAccount {\n    SavingsAccount(String name, double balance) {\n        super(name, balance);\n    }\n\n    void addInterest() {\n        balance += balance * 0.05;\n    }\n}\n\npublic class BankingApplication {\n    public static void main(String[] args) {\n        SavingsAccount a = new SavingsAccount(\"Tarun\", 10000);\n        a.deposit(2000);\n        a.addInterest();\n        a.display();\n    }\n}",
        "output": "Account Holder: Tarun\nBalance: 12600.0",
        "description": "Java programming exercise demonstrating banking application using inheritance."
      }
    ]
  },
  {
    "week": 9,
    "programs": [
      {
        "id": 1,
        "title": "Creating and Using a User-Defined Package",
        "type": "package",
        "code": "// File: mypackage/Student.java\npackage mypackage;\n\npublic class Student {\n    public void display() {\n        System.out.println(\"Student class from mypackage\");\n    }\n}\n\n// File: Main.java\nimport mypackage.Student;\n\npublic class Main {\n    public static void main(String[] args) {\n        Student s = new Student();\n        s.display();\n    }\n}",
        "output": "Student class from mypackage",
        "description": "Java programming exercise demonstrating creating and using a user-defined package."
      },
      {
        "id": 2,
        "title": "Importing Packages",
        "type": "package",
        "code": "// package college\npackage college;\n\npublic class Student {\n    public void show() { System.out.println(\"College Student\"); }\n}\n\n// Another class can use:\n// import college.Student;\n// import college.*;\n\npublic class PackageImportDemo {\n    public static void main(String[] args) {\n        college.Student s = new college.Student();\n        s.show();\n    }\n}",
        "output": "College Student",
        "description": "Java programming exercise demonstrating importing packages."
      },
      {
        "id": 3,
        "title": "Packages and Member Access",
        "type": "package",
        "code": "class AccessDemo {\n    public int publicValue = 1;\n    private int privateValue = 2;\n    protected int protectedValue = 3;\n    int defaultValue = 4;\n\n    void showInsideClass() {\n        System.out.println(publicValue);\n        System.out.println(privateValue);\n        System.out.println(protectedValue);\n        System.out.println(defaultValue);\n    }\n}\n\npublic class MemberAccess {\n    public static void main(String[] args) {\n        AccessDemo a = new AccessDemo();\n        a.showInsideClass();\n        System.out.println(\"Public member = \" + a.publicValue);\n        System.out.println(\"Protected/default/private access depends on package and inheritance.\");\n    }\n}",
        "output": "1\n2\n3\n4\nPublic member = 1\nProtected/default/private access depends on package and inheritance.",
        "description": "Java programming exercise demonstrating packages and member access."
      },
      {
        "id": 4,
        "title": "Demonstrate CLASSPATH",
        "type": "package",
        "code": "// File: utilities/Calculator.java\npackage utilities;\n\npublic class Calculator {\n    public int add(int a, int b) {\n        return a + b;\n    }\n}\n\n// Compile with the package directory on CLASSPATH.\n// Main program:\nimport utilities.Calculator;\n\npublic class ClassPathDemo {\n    public static void main(String[] args) {\n        Calculator c = new Calculator();\n        System.out.println(\"Sum = \" + c.add(10, 20));\n    }\n}",
        "output": "Sum = 30",
        "description": "Java programming exercise demonstrating demonstrate classpath."
      },
      {
        "id": 5,
        "title": "Package Containing Multiple Classes",
        "type": "package",
        "code": "// Package: bank\npackage bank;\n\nclass Account {\n    void show() { System.out.println(\"Account\"); }\n}\n\nclass Customer {\n    void show() { System.out.println(\"Customer\"); }\n}\n\nclass Transaction {\n    void show() { System.out.println(\"Transaction\"); }\n}\n\n// Main class would access public package classes as required.\npublic class BankPackageDemo {\n    public static void main(String[] args) {\n        System.out.println(\"Bank package contains Account, Customer and Transaction classes.\");\n    }\n}",
        "output": "Bank package contains Account, Customer and Transaction classes.",
        "description": "Java programming exercise demonstrating package containing multiple classes."
      },
      {
        "id": 6,
        "title": "Defining and Implementing an Interface",
        "type": "interface",
        "code": "interface Shape {\n    double area();\n}\n\nclass Circle implements Shape {\n    public double area() {\n        return Math.PI * 5 * 5;\n    }\n}\n\nclass Rectangle implements Shape {\n    public double area() {\n        return 10 * 5;\n    }\n}\n\npublic class InterfaceShape {\n    public static void main(String[] args) {\n        System.out.println(\"Circle area = \" + new Circle().area());\n        System.out.println(\"Rectangle area = \" + new Rectangle().area());\n    }\n}",
        "output": "Circle area = 78.53981633974483\nRectangle area = 50.0",
        "description": "Java programming exercise demonstrating defining and implementing an interface."
      },
      {
        "id": 7,
        "title": "Implementing Multiple Interfaces",
        "type": "interface",
        "code": "interface Printable {\n    void print();\n}\n\ninterface Showable {\n    void show();\n}\n\nclass Demo implements Printable, Showable {\n    public void print() { System.out.println(\"Print method\"); }\n    public void show() { System.out.println(\"Show method\"); }\n}\n\npublic class MultipleInterfaces {\n    public static void main(String[] args) {\n        Demo d = new Demo();\n        d.print();\n        d.show();\n    }\n}",
        "output": "Print method\nShow method",
        "description": "Java programming exercise demonstrating implementing multiple interfaces."
      },
      {
        "id": 8,
        "title": "Interface-Based Polymorphism",
        "type": "interface",
        "code": "interface Vehicle {\n    void move();\n}\n\nclass Car implements Vehicle {\n    public void move() { System.out.println(\"Car moves\"); }\n}\n\nclass Bike implements Vehicle {\n    public void move() { System.out.println(\"Bike moves\"); }\n}\n\npublic class InterfacePolymorphism {\n    public static void main(String[] args) {\n        Vehicle v;\n        v = new Car(); v.move();\n        v = new Bike(); v.move();\n    }\n}",
        "output": "Car moves\nBike moves",
        "description": "Java programming exercise demonstrating interface-based polymorphism."
      },
      {
        "id": 9,
        "title": "Variables in Interfaces",
        "type": "interface",
        "code": "interface Constants {\n    int MAX_MARKS = 100;\n    double PI = 3.14159;\n}\n\npublic class InterfaceVariables implements Constants {\n    public static void main(String[] args) {\n        System.out.println(\"MAX_MARKS = \" + MAX_MARKS);\n        System.out.println(\"PI = \" + Constants.PI);\n    }\n}",
        "output": "MAX_MARKS = 100\nPI = 3.14159",
        "description": "Java programming exercise demonstrating variables in interfaces."
      },
      {
        "id": 10,
        "title": "Nested Interfaces",
        "type": "interface",
        "code": "class University {\n    interface Department {\n        void display();\n    }\n}\n\nclass CSE implements University.Department {\n    public void display() {\n        System.out.println(\"Department: CSE\");\n    }\n}\n\npublic class NestedInterfaceDemo {\n    public static void main(String[] args) {\n        University.Department d = new CSE();\n        d.display();\n    }\n}",
        "output": "Department: CSE",
        "description": "Java programming exercise demonstrating nested interfaces."
      },
      {
        "id": 11,
        "title": "Interface Inheritance",
        "type": "interface",
        "code": "interface Animal {\n    void eat();\n}\n\ninterface Dog extends Animal {\n    void bark();\n}\n\nclass Labrador implements Dog {\n    public void eat() { System.out.println(\"Labrador eats\"); }\n    public void bark() { System.out.println(\"Labrador barks\"); }\n}\n\npublic class InterfaceInheritance {\n    public static void main(String[] args) {\n        Labrador l = new Labrador();\n        l.eat();\n        l.bark();\n    }\n}",
        "output": "Labrador eats\nLabrador barks",
        "description": "Java programming exercise demonstrating interface inheritance."
      },
      {
        "id": 12,
        "title": "Real-World Application Using Interfaces",
        "type": "interface",
        "code": "interface Payment {\n    void pay(double amount);\n}\n\nclass UPI implements Payment {\n    public void pay(double amount) {\n        System.out.println(\"Paid Rs.\" + amount + \" using UPI\");\n    }\n}\n\nclass Card implements Payment {\n    public void pay(double amount) {\n        System.out.println(\"Paid Rs.\" + amount + \" using Card\");\n    }\n}\n\npublic class PaymentApplication {\n    public static void main(String[] args) {\n        Payment p;\n        p = new UPI();\n        p.pay(1500);\n        p = new Card();\n        p.pay(2500);\n    }\n}",
        "output": "Paid Rs.1500.0 using UPI\nPaid Rs.2500.0 using Card",
        "description": "Java programming exercise demonstrating real-world application using interfaces."
      }
    ]
  }
];

const weekButtons = document.getElementById("weekButtons");
const programButtons = document.getElementById("programButtons");
const programView = document.getElementById("programView");
const viewer = document.getElementById("viewer");
const weeksSection = document.getElementById("weeks");
const weekLabel = document.getElementById("weekLabel");
const weekTitle = document.getElementById("weekTitle");
const programCount = document.getElementById("programCount");
const backBtn = document.getElementById("backBtn");

const tableHTML = `
<div class="comparison">
<table>
<thead><tr><th>Language</th><th>Primary Use</th><th>Typing</th><th>Execution</th><th>OOP Support</th></tr></thead>
<tbody>
<tr><td>Java</td><td>Enterprise, Android, backend</td><td>Statically typed</td><td>JVM</td><td>Strong</td></tr>
<tr><td>C</td><td>Systems, embedded</td><td>Statically typed</td><td>Native compilation</td><td>No classes</td></tr>
<tr><td>C++</td><td>Systems, games, performance</td><td>Statically typed</td><td>Native compilation</td><td>Strong</td></tr>
<tr><td>Python</td><td>AI, automation, web</td><td>Dynamically typed</td><td>Interpreter/VM</td><td>Strong</td></tr>
<tr><td>JavaScript</td><td>Web, servers, apps</td><td>Dynamically typed</td><td>JS engine</td><td>Prototype/classes</td></tr>
</tbody>
</table>
</div>`;

function renderWeeks() {
  weekButtons.innerHTML = "";
  RECORD.forEach(w => {
    const count = w.programs.length;
    const card = document.createElement("button");
    card.className = "week-card";
    card.innerHTML = `
      <div class="week-number">WEEK ${w.week.toString().padStart(2,"0")}</div>
      <h3>${w.week === 1 ? "Java vs Other Languages" : w.week === 4 || w.week === 5 ? "No Programming Task" : "Programming Exercises"}</h3>
      <p>${count ? count + " program" + (count > 1 ? "s" : "") : "No programming task assigned"} · Open record</p>`;
    card.onclick = () => openWeek(w.week);
    weekButtons.appendChild(card);
  });
}

function openWeek(weekNo) {
  const week = RECORD.find(w => w.week === weekNo);
  if (!week) return;
  viewer.classList.remove("hidden");
  weeksSection.classList.add("hidden");
  weekLabel.textContent = `WEEK ${weekNo.toString().padStart(2,"0")}`;
  weekTitle.textContent = weekNo === 1 ? "Comparative Table" : (week.programs.length ? "Programming Exercises" : "No Programming Task");
  programCount.textContent = week.programs.length ? `${week.programs.length} ITEMS` : "NO TASK";
  programButtons.innerHTML = "";

  if (!week.programs.length) {
    programView.innerHTML = `<div class="install-note"><h3>No programming task was assigned this week.</h3><p>Use the navigation above to continue to another week.</p></div>`;
    viewer.scrollIntoView({behavior:"smooth"});
    return;
  }

  week.programs.forEach((p, i) => {
    const b = document.createElement("button");
    b.className = "program-tab" + (i === 0 ? " active" : "");
    b.textContent = `P${p.id} · ${p.title}`;
    b.onclick = () => {
      document.querySelectorAll(".program-tab").forEach(x => x.classList.remove("active"));
      b.classList.add("active");
      renderProgram(p, weekNo);
    };
    programButtons.appendChild(b);
  });
  renderProgram(week.programs[0], weekNo);
  viewer.scrollIntoView({behavior:"smooth"});
}

function renderProgram(p, weekNo) {
  if (weekNo === 1) {
    programView.innerHTML = `
      <div class="program-head">
        <div class="label">WEEK 01 · THEORY</div>
        <h3>${p.title}</h3>
        <p>Quick comparison of five commonly used programming languages.</p>
      </div>
      ${tableHTML}`;
    return;
  }

  if (p.type === "installation") {
    programView.innerHTML = `
      <div class="program-head">
        <div class="label">WEEK ${String(weekNo).padStart(2,"0")} · INSTALLATION</div>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
      </div>
      <div class="install-note">
        <h3>Windows installation steps</h3>
        <ol>
          <li>Download the required JDK installer from the official JDK distribution website.</li>
          <li>Run the installer and complete the setup.</li>
          <li>Set <code>JAVA_HOME</code> to the JDK installation directory.</li>
          <li>Add <code>%JAVA_HOME%\\bin</code> to the system PATH.</li>
          <li>Open Command Prompt and verify with <code>java -version</code>.</li>
        </ol>
        <pre><code>${p.output}</code></pre>
      </div>`;
    return;
  }

  programView.innerHTML = `
    <div class="program-head">
      <div class="label">WEEK ${String(weekNo).padStart(2,"0")} · PROGRAM ${String(p.id).padStart(2,"0")}</div>
      <h3>${p.title}</h3>
      <p>${p.description}</p>
    </div>
    <div class="content-grid">
      <div class="code-box">
        <div class="box-title">JAVA SOURCE CODE</div>
        <pre><code>${escapeHTML(p.code)}</code></pre>
      </div>
      <div class="output-box">
        <div class="box-title">EXPECTED OUTPUT</div>
        <pre><code>${escapeHTML(p.output)}</code></pre>
      </div>
    </div>`;
}

function escapeHTML(str) {
  return String(str)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;");
}

backBtn.addEventListener("click", () => {
  viewer.classList.add("hidden");
  weeksSection.classList.remove("hidden");
  weeksSection.scrollIntoView({behavior:"smooth"});
});

document.getElementById("menuBtn").addEventListener("click", () => {
  const nav = document.getElementById("topNav");
  nav.style.display = nav.style.display === "flex" ? "" : "flex";
  nav.style.position = "absolute";
  nav.style.right = "6vw";
  nav.style.top = "76px";
  nav.style.background = "#11131b";
  nav.style.padding = "18px";
  nav.style.flexDirection = "column";
  nav.style.border = "1px solid #272b38";
  nav.style.borderRadius = "10px";
});

document.getElementById("profileImage").addEventListener("error", function() {
  this.style.display = "none";
  this.nextElementSibling.style.display = "grid";
});

renderWeeks();
