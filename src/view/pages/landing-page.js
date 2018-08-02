import SampleComponent from '../components/sample-component';

export default function() {
    return {        
        view() {
            /* return m('div', [
                m('h2', 'Congratulations, you made it!'),
                m('p', 'You\'ve spun up your very first Mithril app :-)'),
                m(SampleComponent),
            ]); */
            return (
                <div>
                    <h2>Congratulations, you made it!</h2>
                    <p>You've spun up your very first Mithril app :-)</p>
                    <SampleComponent />
                </div>
            );
        },
    };
}