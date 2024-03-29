import React, { Fragment, Component } from 'react'
import * as yup from 'yup';
import withForm from '../../shared/hocs/withForm'
import userService from '../../shared/helpers/userService';
import './styles.css'

class CreateProduct extends Component {
    titleOnChangeHandler = this.props.controlChangeHandlerFactory('title');
    imageUrlOnChangeHandler = this.props.controlChangeHandlerFactory('imageUrl');
    CPUOnChangeHandler = this.props.controlChangeHandlerFactory('CPU');
    GPUOnChangeHandler = this.props.controlChangeHandlerFactory('GPU');
    HDDOnChangeHandler = this.props.controlChangeHandlerFactory('HDD');
    RAMOnChangeHandler = this.props.controlChangeHandlerFactory('RAM');
    SSDOnChangeHandler = this.props.controlChangeHandlerFactory('SSD');
    weightOnChangeHandler = this.props.controlChangeHandlerFactory('weight');
    warrantyOnChangeHandler = this.props.controlChangeHandlerFactory('warranty');
    descriptionOnChangeHandler = this.props.controlChangeHandlerFactory('description');
    priceOnChangeHandler = this.props.controlChangeHandlerFactory('price');

    submitHandler = async () => {
        await this.props.runValidations()
        const errors = await this.props.getFormErrorState();
        if (!!errors) { return; }
        let data = await this.props.getFormState();
        if (data.imageUrl === "") {
            data.imageUrl = "https://logox.com/logox/uploads/noimage300X300.jpg"
        }
        await userService.createProduct(data)
        await this.props.history.push('/products');
    };

    getFirstControlError = name => {
        const errorState = this.props.getFormErrorState();
        return errorState && errorState[name] && errorState[name][0];
    };

    render() {
        const titleError = this.getFirstControlError('title');
        const CPUError = this.getFirstControlError('CPU');
        const GPUError = this.getFirstControlError('GPU');
        const HDDError = this.getFirstControlError('HDD');
        const RAMError = this.getFirstControlError('RAM');
        const SSDError = this.getFirstControlError('SSD');
        const weightError = this.getFirstControlError('weight');
        const warrantyError = this.getFirstControlError('warranty');
        const imageUrlError = this.getFirstControlError('imageUrl');
        const priceError = this.getFirstControlError('price');

        return (
            <Fragment>
                <img id="backgroundUserRegisterLoginPage" alt="background" src="http://eskipaper.com/images/free-dark-wallpaper-1.jpg" />
                <div id="formStyling">
                    <h2 id="titleForm"> Create product </h2>
                    <form action="/" method="POST">
                        <div>
                            <input type="text" name="title" placeholder="Title" onChange={this.titleOnChangeHandler} />
                            {titleError && <div className="validateInputs">{titleError}</div>}
                        </div>
                        <div>
                            <input type="text" name="imageUrl" placeholder="Image URL" onChange={this.imageUrlOnChangeHandler} />
                            {imageUrlError && <div className="validateInputs">{imageUrlError}</div>}
                        </div>
                        <div>
                            <input type="text" name="CPU" placeholder="CPU" onChange={this.CPUOnChangeHandler} />
                            {CPUError && <div className="validateInputs">{CPUError}</div>}
                        </div>
                        <div>
                            <input type="text" name="GPU" placeholder="GPU" onChange={this.GPUOnChangeHandler} />
                            {GPUError && <div className="validateInputs">{GPUError}</div>}
                        </div>
                        <div>
                            <input type="number" min={0} max="5000" name="HDD" placeholder="HDD" onChange={this.HDDOnChangeHandler} />
                            {HDDError && <div className="validateInputs">{HDDError}</div>}
                        </div>
                        <div>
                            <input type="number" min="2" max="64" name="RAM" placeholder="RAM" onChange={this.RAMOnChangeHandler} />
                            {RAMError && <div className="validateInputs">{RAMError}</div>}
                        </div>

                        <div>
                            <input type="number" min={0} max="2500" name="SSD" placeholder="SSD" onChange={this.SSDOnChangeHandler} />
                            {SSDError && <div className="validateInputs">{SSDError}</div>}
                        </div>
                        <div>
                            <input type="number" name="weight" min="0" max="15" step="0.5" placeholder="Weight" onChange={this.weightOnChangeHandler} />
                            {weightError && <div className="validateInputs">{weightError}</div>}
                        </div>
                        <div>
                            <input type="number" min="0" max="5" name="warranty" placeholder="Warranty" onChange={this.warrantyOnChangeHandler} />
                            {warrantyError && <div className="validateInputs">{warrantyError}</div>}
                        </div>
                        <div>
                            <input type="number" min="1" max="15000" name="price" placeholder="Price" onChange={this.priceOnChangeHandler} />
                            {priceError && <div className="validateInputs">{priceError}</div>}
                        </div>
                        <div>
                            <textarea name="description" placeholder="Product description" onChange={this.descriptionOnChangeHandler}></textarea>
                        </div>
                        <div className="button-formAction">
                            <button type="button" onClick={this.submitHandler}> Create </button>
                        </div>
                    </form>
                </div>
            </Fragment>
        )
    }
}

const initialFormState = {
    title: null,
    imageUrl: "https://logox.com/logox/uploads/noimage300X300.jpg",
    CPU: null,
    GPU: null,
    HDD: 0,
    RAM: 2,
    SSD: 0,
    weight: 0,
    warranty: 2,
    price: 1,
    description: "no description found",
};

const schema = yup.object({
    title: yup.string('Title shoud be a string')
        .required('Title is required')
        .min(5, 'Title should be more than 5 chars'),

    imageUrl: yup.string('Image URL shoud be a string')
        .default("https://logox.com/logox/uploads/noimage300X300.jpg"),

    CPU: yup.string('CPU shoud be a string')
        .required('CPU is required')
        .min(3, 'CPU should be more than 3 chars'),

    GPU: yup.string('GPU shoud be a string')
        .required('GPU is required')
        .min(3, 'GPU should be more than 3 chars'),

    HDD: yup.number('HDD shoud be a number')
        .required('HDD is required')
        .min(0).max(5000),

    RAM: yup.number('RAM shoud be a number')
        .required('RAM is required')
        .min(2).max(64),

    SSD: yup.number('SSD shoud be a number')
        .required('SSD is required')
        .min(0).max(2500)
        .default(0),


    weight: yup.number('Weight shoud be a number')
        .required('Weight is required')
        .min(0).max(15),

    warranty: yup.number('Warranty shoud be a number')
        .required('Warranty is required')
        .min(0).max(5).default(2),

    price: yup.number('Price shoud be a number')
        .required('Price is required')
        .min(1).max(15000),

    description: yup.string('Description shoud be a string')
        .default("no description found"),

});

export default withForm(CreateProduct, initialFormState, schema)
