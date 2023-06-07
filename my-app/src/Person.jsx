import React from 'react'

const Person = (props) => {
    const person1 = {
        name: 'Pranoy',
        age: 24,
        job: 'SE'
    };
    const person2 = {
        name: 'Jonas',
        age: 22,
        job: 'ASE'
    };
    const person3 = {
        name: 'Martha',
        age: 21,
        job: 'HR'
    }

    if (props.personObj === 'person1') {
        return (
            <>
                <h2>Name is : {person1.name}</h2>
                <h2>Age is : {person1.age}</h2>
                <h2>Job is : {person1.job}</h2>
            </>
        )

    } else if (props.personObj === 'person2') {
        return (
            <>
                <h2>Name is : {person2.name}</h2>
                <h2>Age is : {person2.age}</h2>
                <h2>Job is : {person2.job}</h2>
            </>
        )

    } else if (props.personObj === 'person3') {
        return (
            <>
                <h2>Name is : {person3.name}</h2>
                <h2>Age is : {person3.age}</h2>
                <h2>Job is : {person3.job}</h2>
            </>
        )

    }
}

export default Person