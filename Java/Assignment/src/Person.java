import java.util.Calendar;
import java.util.Date;

public class Person {

    private String name;
    private int age;


    public Person(String name, int age) { // Constructor to initialize our class with values
        this.name = name;
        this.age = age;
    }

    /* The following methods are getters and setters
      - they allow us to modify and access the private members of the class
     */
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    // End of getters and setters

    /* This method allows us to print our person object */

    public String printPerson(){
        return "My name is " + name + " I was born in "+ getYear(age)+" and so I am a "+giveCategory();
    }

    private int getYear(int age){
        Date date = new Date(); // Get today's date
        Calendar calendar = Calendar.getInstance(); // Get a calender object
        calendar.setTime(date); // Set the calendar date to today

        int year = calendar.get(Calendar.YEAR); // Get the current year

        return year - age;
    }

    private String giveCategory(){
        String category;
        Calendar calendar = Calendar.getInstance();

        if(calendar.get(Calendar.YEAR) - getAge() > 1990){
            category = "Millennial";
        }
        else {
            category = "Baby boomer";
        }
        return category;
    }
}
