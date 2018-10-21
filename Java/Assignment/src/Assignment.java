/*
Name: Terence Amunga

I added giveCategory() and edited printPerson() in the Person class
 */
public class Assignment {

    public static void main(String[] args){
        String[] names = {"Abby", "Beth", "Charles", "Daniel", "Eve", "Emma", "Francis", "Fred"};
        int[] ages = {23, 30, 23, 34, 21, 29, 26, 27};

        Person[] person = new Person[names.length];

        for(int i=0;i<names.length;i++){
            person[i] = new Person(names[i], ages[i]);
            System.out.println(person[i].printPerson());
        }

    }
}
