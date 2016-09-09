var mashedArray = JSON.parse(context.getVariable("mashedArray"));
totalUberUrls = context.getVariable("totalUberUrls");

for(var i=0;i<totalUberUrls;i++)
{
	var uberResponse = JSON.parse(context.getVariable('uberCall'+i));
	mashedArray[i].distance=uberResponse.prices[0].distance;
<<<<<<< HEAD
	mashedArray[i].duration=Math.round(uberResponse.prices[0].duration/60);
	mashedArray[i].fareEstimate=uberResponse.prices[0].estimate;
=======
	mashedArray[i].duration=uberResponse.prices[0].duration;
	mashedArray[i].estimate=uberResponse.prices[0].estimate;
>>>>>>> 9bf5effaa5a7b4762ee47b10fc1f9f2aeff3e6f4
}

context.setVariable("mashedArray",JSON.stringify(mashedArray));