
new Vue({
	el: "#root",
	data:{
		newTask:"",
		tasks: [
			{description:"Comprar comida",completed:true},
			{description:"Ir a la U",completed:false},
			{description:"Sacar al perro",completed:true},
			{description:"Visitar familiares",completed:false}
			]
	},
	methods:{
		addTask(){
		var a = {description:this.newTask,completed:false};
		this.tasks.push(a);
		this.newTask = "";
		},
		endTask(index){
			this.tasks[index].completed = true;
		},
		allCount(){
		return this.tasks.length;	
		},
		contarCompletas(){
			var i = 0;
			for (var index = 0; index < this.tasks.length; index++) {
				var element = this.tasks[index];
				if(element.completed){
					i++;
				}				
			}
			return i;
		}
	}
})