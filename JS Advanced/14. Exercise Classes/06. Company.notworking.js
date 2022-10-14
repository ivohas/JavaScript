class Company { 
    // TODO: implement this class...
    constructor(){
       this.departments={}
    }
    addEmployee=(name, salary, position, department)=>{
        if(name==undefined||name==''||salary==undefined||salary<0||position==undefined||position==''||department==undefined||department==''){
            throw new Error("Invalid input!")
        }

        if(!this.departments[department]){
            this.departments[department]={
                
                sumSalary:0,
                avgSalary:0,
                employees:[]
            }
            this.departments[department].employees={name,salary,position}
            this.departments[department].sumSalary+=salary
            this.departments[department].avgSalary=this.departments[department].salary/this.departments[department].employees.lenght
            return `New employee is hired. Name: ${name}. Position: ${position}`
        }
    }
    bestDepartment=()=>{
        //let hightestAvgSalary=0
        // let bestDepartment={}
        // for (const department of this.departments) {
        //     if( Math.round(department.avgSalary,2)>hightestAvgSalary) {
        //         hightestAvgSalary=Math.round(department.avgSalary,2)
        //         bestDepartment=department
        //    }

        // }
        let bestDepartment = Object.entries(this.departments).sort(
            ([depNameOne, depInfoOne], [depNameTwo, depInfoTwo]) => {
                return depInfoTwo.avgSalary - depInfoOne.avgSalary;
            }
        )[0];

        let sortedEmployees = bestDepartment[1].employees.sort((a, b) => {
            return b.salary - a.salary || a.name.localeCompare(b.name);
        });

        let result = 'Best Department is: ${bestDepartment[0]}\n';
        result += 'Average salary: ${bestDepartment[1].avgSalary.toFixed(2)}\n';

        for (let i = 0; i < sortedEmployees.length; i++) {
            const e = sortedEmployees[i];
            if (i + 1 < sortedEmployees.length) {
                buff += '${e.name} ${e.salary} ${e.position}\n';
            } else {
                buff += '${e.name} ${e.salary} ${e.position}';
            }
        }

        return result.join('\n');
    

        // let result=[]
        // result.push( `Best Department is: ${sortedEmplyees.name}`)
        // result.push(`Average salary: ${sortedEmplyees.salary}`)
        // for (const empoyee of sortedEmplyees.employees) {
        //     result.push(`${name} ${salary} ${position}`)
        // }
        // result.join('\n')
    }
}
 
 
let c = new Company();

let actual1 = c.addEmployee("Stanimir", 2000, "engineer", "Human resources");
let expected1 = "New employee is hired. Name: Stanimir. Position: engineer";


c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");

let act = c.bestDepartment();
let exp = "Best Department is: Human resources\nAverage salary: 1675.00\nStanimir 2000 engineer\nGosho 1350 HR";
if(exp===act){
    console.log('yes')
}else{console.log('No')}
