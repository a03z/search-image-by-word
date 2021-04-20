import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button } from '@chakra-ui/button'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'

type Inputs = {
    searchImage: string
}

interface PropsI {
    onSubmit: SubmitHandler<Inputs>
}

function Form(props: PropsI) {
    const { register, handleSubmit } = useForm<Inputs>()

    return (
        <form className="searchForm" onSubmit={handleSubmit(props.onSubmit)}>
            <InputGroup>
                <Input
                    {...register('searchImage')}
                    placeholder="Enter keyword"
                />
                <InputRightElement
                    width="100px"
                    children={
                        <Button type="submit" colorScheme="pink" width="100px">
                            Find
                        </Button>
                    }
                />
            </InputGroup>
        </form>
    )
}

export default Form
