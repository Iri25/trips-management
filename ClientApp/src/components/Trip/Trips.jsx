import React, { Component } from 'react';
import axios from 'axios'; // var 1
import { connect } from 'react-redux';
import { getAllTrips, updateTrip } from '../../actions/tripActions';

export class Trips extends Component
{
    constructor(props){
        super(props);

        this.onTripUpdate = this.onTripUpdate.bind(this);
        this.onTripDelete = this.onTripDelete.bind(this);

        this.state = {
            trips: [],
            loading: true,
            failed: false,
            error: ''
        }
    }

    componentDidMount() {
        // this.populateTripsData(); // var 1
        this.props.getAllTrips(); // var 2
    }

    componentDidUpdate(prevProps) { // var 2
        if (prevProps.trips.data != this.props.trips.data) {
            this.setState({ trips: this.props.trips.data });
        }
    }

    onTripUpdate(id) {
        const { history } = this.props;
        history.push('/update/' + id);
    }

    onTripDelete(id) {
        const { history } = this.props;
        history.push('/delete/' + id);
    }

    // populateTripsData() { // var 1
    //     axios.get("api/Trips/GetTrips").then(result => {
    //         const response = result.data;
    //         this.setState({ trips: response, loading: false, failed: false, error: ""});
    //     }).catch(error => {
    //         this.setState({ trips: [], loading: false, failed: true, error: "Trips could not be loaded"})
    //     });
    // }

    renderAllTripsTable(trips) {
        return (
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Date started</th>
                        <th>Date completed</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        trips.map(trip => (
                            <tr key = {trip.id}>
                                <td>{trip.name}</td>
                                <td>{trip.description}</td>
                                <td>{new Date(trip.dateStarted).toISOString().slice(0, 10)}</td>
                                <td>{trip.dateCompleted ? new Date(trip.dateCompleted).toISOString().slice(0, 10) : ' - '}</td>
                                <td>
                                    <div className="form-group">
                                        <button onClick={() => this.onTripUpdate(trip.id)} className="btn btn-success">
                                            Update
                                        </button>
                                        <button onClick={() => this.onTripDelete(trip.id)} className="btn btn-danger">
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        );
    }

    render() {

        // let content = this.state.loading ? ( // var 1
        //     <p>
        //         <em>Loading...</em>
        //     </p>
        // ) : ( this.state.failed ? (
        //     <div className='text-danger'>
        //         <em>{this.state.error}</em>

        //     </div>
        //     ) : (
        //         this.renderAllTripsTable(this.state.trips)
        //     )
        // )

        let content = this.props.trips.loading ? ( // var2
            <p>
                <em>Loading...</em>
            </p>
        ) : (
            this.state.trips.length && this.renderAllTripsTable(this.state.trips)
        );

        return (
            <div>
                <h1>All trips</h1>
                <p>Here you can see all trips</p>
                {content}
            </div>
        );
    }

}

const mapStateToProps = ({ trips }) => ({ // var 2
    trips
});

export default connect(mapStateToProps, { getAllTrips })(Trips); // var 2