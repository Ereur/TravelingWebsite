import prisma from '@/lib/prisma';
import { NextResponse,NextRequest} from 'next/server'

const handler = async (req:NextRequest) => {
  if (req.method === 'GET') {
    try {
      const trips = await prisma.trip.findMany({
        include: {
          availabilityRanges: true, // include availability ranges in the response
        },
      });
      NextResponse.json(trips, { status: 200 });
    } catch (error) {
        NextResponse.json({ error: 'Error fetching trips' }, { status: 500 });
    //   res.status(500).json({ error: 'Error fetching trips' });
    }
  } else if (req.method === 'POST') {
    try {
      const data = await req.formData();
      // const title = data.get('title') as string;
      // const description = data.get('description') as string;
      const test = data.keys();
      const keysArray = [...test];
      const dataObject = keysArray.reduce((obj:{[key:string]:any}, key) => {
        obj[key] = data.get(key);
        return obj;
      }, {
        
      });

      console.log(dataObject);
      
      // console.log(test);
      const newTrip = await prisma.trip.create({
        data: {
          title : dataObject.title,
          description: dataObject.description,
          days: parseInt(dataObject.days, 10),
          Acomodation: dataObject.Acomodation,
          meals: dataObject.meals,
          groupSize: parseInt(dataObject.groupSize, 10),
        },
      });

       return  NextResponse.json(newTrip, { status: 201 });
    //   res.json(newTrip);
    } catch (error) {
      console.error(error);
       return NextResponse.json({ error: 'Error creating trip' }, { status: 500 });
    }
  } else {
    console.log('Method not allowed');
    console.log(req.method);
   return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
  }
};

export { handler as GET, handler as POST };
