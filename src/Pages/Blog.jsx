
const Blog = () => {
    return (
        <div className="md:container mx-auto">
            <h2 className="text-2xl font-bold text-cyan-800">One Way Data Binding</h2>
            <p>Data binding is a concept that allows to synchronize and keep data in  applications user interface (UI) and application logic in sync. One-way data binding is a type of data binding where the data flows in one direction, typically from the data source to the UI. Changes in the data source update the UI, but changes in the UI do not affect the data source.</p>
            <h2 className="text-2xl font-bold text-cyan-800">Npm:</h2>
            <p>npm (Node Package Manager) is a package manager for Node.js, a popular runtime environment for building server-side and command-line applications using JavaScript. npm serves as a central repository for open-source JavaScript packages and provides a command-line interface for managing and distributing these packages.</p>
            <h2 className="text-2xl font-bold text-cyan-800">Difference Between Mongodb And MySql Databases</h2>
            <p>
                MongoDB:

                MongoDB is a NoSQL database that is schema-less, allowing for flexible data structures, making it suitable for unstructured data.
                Its horizontally scalable, meaning it can distribute data across multiple servers for managing large datasets and high write loads.
                Queries are based on JSON-like documents, making it flexible for unstructured data.
                Supports multi-document transactions for data consistency.
                Doesnt require predefined schemas, making it adaptable to changing data structures.

                MySQL:

                MySQL is a relational database with structured schemas using tables and relationships, ideal for structured data with defined relationships.
                It scales vertically by adding resources to a single server and may have limitations for distributed databases.
                Queries are performed using SQL, a standardized language for querying structured data.
                Offers strong support for ACID transactions, ensuring data integrity.
                Enforces rigid schema structures, requiring careful management and migrations for changes.
            </p>
        </div>
    );
};

export default Blog;