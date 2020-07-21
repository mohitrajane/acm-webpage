import React,{Component} from 'react';
import eventsData from '../res/events.json';

class event extends Component{
    constructor(props){
        super(props);
        this.state ={
            years: Object.keys(eventsData).reverse(),
            currentYear:Object.keys(eventsData).reverse()[0]
        };
        this.updateCurrentYear = this.updateCurrentYear.bind(this);
    }
    updateCurrentYear(e){
        this.setState({
            currentYear: e.target.id
        });
    }
    render(){
        return(
            <div className="">
                <div className="py-3 flex justify-center">
                    <table className="table-fixed shadow-lg">
                        <thead className="py-2 bg-gray-200">
                            <tr>
                            <th className="w-1/6"></th>
                            <th className=" mx-auto w-full justify-center p-4 inline-flex">
                                {
                                    this.state.years.map((item) =>(
                                        item === this.state.currentYear?
                                            <p key={item} id={item} onClick={this.updateCurrentYear} className="bg-blue-500 rounded-full text-white font-normal px-4 cursor-default">{item}</p>:
                                            <p key={item} id={item} onClick={this.updateCurrentYear} className="px-4 font-normal cursor-pointer">{item}</p>
                                    ))
                                }
                            </th>
                            <th className="w-1/4"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-2 uppercase text-center font-bold">date</td>
                                <td className="p-2 uppercase text-center font-bold">event</td>
                            </tr>
                             {eventsData[this.state.currentYear].map(event =>(
                                 // pseudo class not working i.e even iel no background color change
                                <tr key={event.id} className="even:bg-gray-200">
                                    <td className="px-2 py-2 font-light  tracking-wider">{event.date}</td>
                                    <td className="p-2">{event.name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default event;