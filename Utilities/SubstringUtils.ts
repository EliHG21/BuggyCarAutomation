export function ExtractModel(modelWithMakeText: string): string {
    let modelWithMakeTextSplited = modelWithMakeText.split(' ');
    modelWithMakeTextSplited.shift();
    modelWithMakeTextSplited.pop();
    modelWithMakeText = modelWithMakeTextSplited.join(' ');
    modelWithMakeTextSplited = modelWithMakeText.split('(');
    modelWithMakeTextSplited.pop();
    let model = modelWithMakeTextSplited.join('');
    model = model.replace('\n', '');
    return model
}

export function ExtractMake(makeWithVotesText: string): string {
    let makeWithVotesTextSplited = makeWithVotesText.split(' ');
    makeWithVotesTextSplited.pop();
    makeWithVotesText = makeWithVotesTextSplited.join('');
    makeWithVotesTextSplited = makeWithVotesText.split('(')
    makeWithVotesTextSplited.pop();
    let make = makeWithVotesTextSplited.join('');
    make = make.replace('\n', '');
    return make
}